import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MainService } from '../main.service';

@Component({
  standalone: true,
  selector: 'actions',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <div class="actions">
      <button mat-raised-button (click)="ms.add()" color="primary">{{ content.add }}</button>
      <button mat-raised-button (click)="ms.remove()" color="accent">{{ content.remove }}</button>
      <button mat-raised-button (click)="ms.clear()" color="warn">{{ content.clear }}</button>
    </div>
  `,
  styles: `.actions { display: flex; gap: 15px; }`,
})
export class ActionsComponent {
  ms = inject(MainService);
  @Input() content!: { add: string; remove: string; clear: string };
}
