import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-pdf-viewer-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiPdfViewerExample1 {
    constructor(
        @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,
    ) {}

    show(actions: PolymorpheusContent<TuiPdfViewerOptions>) {
        this.pdfService
            .open('/assets/media/taiga.pdf', {
                label: 'Taiga UI',
                actions,
            })
            .subscribe();
    }
}
