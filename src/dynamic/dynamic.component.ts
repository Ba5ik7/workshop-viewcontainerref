import { Component, HostBinding, HostListener, inject, Input, OnInit } from '@angular/core';
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
    :host { display: block; padding: 10px 15px; margin-bottom: 15px; cursor: pointer;}
    .dynamic-component { display: flex; justify-content: space-between; align-items: center; }
  `,
})
export class DynamicComponent {
  @HostBinding('class.draw') selected = true;
  ms = inject(MainService);
  @Input() index = 0;
  @HostListener('click')
  click = () => this.ms.selectedIndex(this.index);
}
