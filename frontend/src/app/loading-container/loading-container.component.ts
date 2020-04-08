import { Component, Input } from '@angular/core';
import { Loadable } from '../../core/news.reducer';

@Component({
  selector: 'loading-container',
  templateUrl: './loading-container.component.html'
})
export class LoadingContainerComponent {
  @Input() loadable: Loadable;
}
