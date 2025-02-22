import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
    QueryList,
    Renderer2,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {
    EMPTY_QUERY,
    itemsQueryListObservable,
    moveFocus,
    TUI_IS_ANDROID,
    TUI_IS_IOS,
    tuiDefaultProp,
    TuiDestroyService,
    tuiPure,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {TUI_MOBILE_AWARE} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';
import {filter, mapTo} from 'rxjs/operators';

import {TuiTabComponent} from '../tab/tab.component';
import {TUI_TAB_ACTIVATE} from '../tab/tab.providers';
import {TAB_ACTIVE_CLASS} from '../tabs.const';

// TODO: remove in ivy compilation
export const OBSERVER_INIT = {
    childList: true,
};

// @dynamic
@Component({
    selector: 'tui-tabs, nav[tuiTabs]',
    templateUrl: './tabs.template.html',
    styleUrls: ['./tabs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiResizeService,
        MutationObserverService,
        {
            provide: MUTATION_OBSERVER_INIT,
            useValue: OBSERVER_INIT,
        },
    ],
})
export class TuiTabsComponent implements AfterViewChecked {
    @ContentChildren(forwardRef(() => TuiTabComponent))
    private readonly children: QueryList<unknown> = EMPTY_QUERY;

    @Input()
    @HostBinding('class._underline')
    @tuiDefaultProp()
    underline = true;

    @Input('activeItemIndex')
    set activeItemIndexSetter(index: number) {
        this.activeItemIndex = index;
        this.scrollTo(this.tabs[index]);
    }

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    @HostBinding('class._ios')
    readonly isIos: boolean;

    @HostBinding('class._android')
    readonly isAndroid: boolean;

    activeItemIndex = 0;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiResizeService) resize$: Observable<void>,
        @Inject(TUI_IS_IOS) isIos: boolean,
        @Inject(TUI_IS_ANDROID) isAndroid: boolean,
        @Inject(TUI_MOBILE_AWARE) mobileAware: boolean,
    ) {
        this.isIos = mobileAware && isIos;
        this.isAndroid = mobileAware && isAndroid;

        resize$.pipe(filter(() => this.underline)).subscribe(() => {
            changeDetectorRef.detectChanges();
        });
    }

    @tuiPure
    get refresh$(): Observable<boolean> {
        return itemsQueryListObservable(this.children).pipe(mapTo(true));
    }

    get tabs(): ReadonlyArray<HTMLElement> {
        return Array.from(
            this.elementRef.nativeElement.querySelectorAll<HTMLElement>('[tuiTab]'),
        );
    }

    get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex] || null;
    }

    @HostListener(`${TUI_TAB_ACTIVATE}.stop`, ['$event.target'])
    onActivate(element: HTMLElement) {
        const index = this.tabs.findIndex(tab => tab === element);

        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndexSetter = index;
        this.activeItemIndexChange.emit(index);
    }

    @HostListener('keydown.arrowRight.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowLeft.prevent', ['$event.target', '-1'])
    onKeyDownArrow(current: HTMLElement, step: number) {
        const {tabs} = this;

        moveFocus(tabs.indexOf(current), tabs, step);
    }

    ngAfterViewChecked() {
        const {tabs, activeElement} = this;

        tabs.forEach(nativeElement => {
            this.renderer.removeClass(nativeElement, TAB_ACTIVE_CLASS);
            this.renderer.setAttribute(nativeElement, 'tabIndex', '-1');
        });

        if (activeElement) {
            this.renderer.addClass(activeElement, TAB_ACTIVE_CLASS);
            this.renderer.setAttribute(activeElement, 'tabIndex', '0');
        }
    }

    private scrollTo(element?: HTMLElement) {
        if (!element) {
            return;
        }

        const {offsetLeft, offsetWidth} = element;
        const {nativeElement} = this.elementRef;

        if (offsetLeft < nativeElement.scrollLeft) {
            nativeElement.scrollLeft = offsetLeft;
        }

        if (
            offsetLeft + offsetWidth >
            nativeElement.scrollLeft + nativeElement.offsetWidth
        ) {
            nativeElement.scrollLeft =
                offsetLeft + offsetWidth - nativeElement.offsetWidth;
        }
    }
}
