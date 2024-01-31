import { Component, inject, ViewContainerRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { combineLatest, tap } from 'rxjs';
import 'zone.js';

import { CommonModule } from '@angular/common';
import { MainService } from './main.service';
import { ActionsComponent } from './actions/actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ActionsComponent],
  template: `
    @if (viewModel$ | async; as vm) {
      <div class="logo"></div>
      <h3>{{ vm.content.header }}</h3>
      <p>{{ vm.content.body }}</p>
      <actions [content]="vm.content"></actions>
      @if (vcr.length > 0) {
        <p>{{ vm.content.selectedIndex }} {{ vm.selectedIndex }}</p>
      }
    }
  `,
  styles: `.components { margin: 15px 0px; }`,
})
export class App {
  vcr = inject(ViewContainerRef);
  ms = inject(MainService);

  viewModel$ = combineLatest({
    content: this.ms.content$.pipe(tap(() => this.ms.setVcr(this.vcr))),
    selectedIndex: this.ms.selectedIndex$,
  });
}
bootstrapApplication(App);
