import {Component, Input } from '@angular/core';
import {Loadable} from '../../loadable/loadable';

@Component({
  selector: 'loading-container',
  templateUrl: './loading-container.component.html'
})
export class LoadingContainerComponent {
  @Input() loadable: Loadable;
}
