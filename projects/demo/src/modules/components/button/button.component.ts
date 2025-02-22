import {Component, forwardRef, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';
import {default as exampleDefineOptions} from '!!raw-loader!./examples/import/define-options.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

@Component({
    selector: 'example-tui-button',
    templateUrl: './button.template.html',
    styleUrls: ['./button.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiButtonComponent),
        },
    ],
})
export class ExampleTuiButtonComponent extends AbstractExampleTuiInteractive {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        HTML: example2Html,
        TypeScript: example2Ts,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
    };

    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    readonly exampleDefineOptions = exampleDefineOptions;

    disabled = false;

    showLoader = false;

    readonly appearanceVariants = [
        'primary',
        'secondary',
        'outline',
        'flat',
        'whiteblock',
        'whiteblock-active',
        'icon',
    ];

    appearance = this.appearanceVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    size: TuiSizeXS | TuiSizeXL = this.sizeVariants[3];

    readonly shapeVariants = ['square', 'rounded'] as const;

    shape = null;

    icon: PolymorpheusContent = '';

    iconRight: PolymorpheusContent = '';

    iconButton = false;

    @tuiPure
    getContentVariants(template: TemplateRef<{}>): ReadonlyArray<PolymorpheusContent> {
        return ['', 'tuiIconEyeClosed', 'tuiIconHeartLarge', template];
    }
}
