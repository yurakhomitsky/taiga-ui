import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Inject,
    Input,
    QueryList,
} from '@angular/core';
import {
    EMPTY_QUERY,
    identity,
    isPresent,
    itemsQueryListObservable,
    tuiDefaultProp,
    TuiDestroyService,
} from '@taiga-ui/cdk';
import {merge} from 'rxjs';
import {filter, map, mapTo, pairwise, switchMap, takeUntil} from 'rxjs/operators';

import {TuiAccordionItemComponent} from './accordion-item/accordion-item.component';

@Component({
    selector: 'tui-accordion',
    styleUrls: ['./accordion.style.less'],
    templateUrl: 'accordion.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiAccordionComponent implements AfterContentInit {
    @Input()
    @tuiDefaultProp()
    closeOthers = true;

    @Input()
    @tuiDefaultProp()
    rounded = true;

    @ContentChildren(TuiAccordionItemComponent)
    readonly accordionItems: QueryList<TuiAccordionItemComponent> = EMPTY_QUERY;

    constructor(
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
    ) {}

    ngAfterContentInit() {
        const {accordionItems} = this;
        const rows$ = itemsQueryListObservable(accordionItems);
        const newOpenRow$ = rows$.pipe(
            pairwise(),
            map(([previous, current]) =>
                current.find(item => previous.indexOf(item) === -1 && item.open),
            ),
            filter(isPresent),
        );
        const rowsOpen$ = merge(
            rows$.pipe(
                switchMap(rows =>
                    merge(
                        ...rows.map(row =>
                            row.openChange.pipe(filter(identity), mapTo(row)),
                        ),
                    ),
                ),
            ),
            newOpenRow$,
        ).pipe(
            filter(() => this.closeOthers),
            takeUntil(this.destroy$),
        );

        rowsOpen$.subscribe(currentRow => {
            accordionItems.forEach(row => {
                if (currentRow !== row) {
                    row.close();
                }
            });
        });
    }
}
