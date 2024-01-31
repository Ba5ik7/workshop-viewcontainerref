import { Component, HostListener, inject, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MainService } from '../main.service';

@Component({
  standalone: true,
  selector: 'dynamic',
  imports: [MatIconModule],
  template: `
    <div class="dynamic-component">
      {{ index }} Dynamic component.
      <div>
        <mat-icon fontIcon="keyboard_arrow_up"></mat-icon>
        <mat-icon fontIcon="keyboard_arrow_down"></mat-icon>
        <mat-icon fontIcon="delete"></mat-icon>
      </div>
    </div>`,
  styles: `
    :host { display: block; border: 1px red solid; padding: 10px 5px; margin-bottom: 15px; }
    .dynamic-component { display: flex; justify-content: space-between; }
  `,
})
export class DynamicComponent {
  ms = inject(MainService);
  @Input() index = 0;
  @HostListener('click')
  click = () => this.ms.selectedIndex(this.index);
}
