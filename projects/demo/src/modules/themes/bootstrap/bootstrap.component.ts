import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

// @dynamic
@Component({
    selector: 'bootstrap',
    styleUrls: ['./bootstrap.style.less'],
    template: '',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class BootstrapComponent extends AbstractTuiThemeSwitcher {}
