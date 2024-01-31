import { Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { DynamicComponent } from './dynamic/dynamic.component';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private vcr!: ViewContainerRef;

  private _selectedIndexSubject = new BehaviorSubject<number>(0);
  selectedIndex$ = this._selectedIndexSubject.asObservable();
  selectedIndex = (index: number) => this._selectedIndexSubject.next(index);

  content$ = of({
    header: 'ViewContainerRef',
    body: 'Represents a container where one or more views can be attached to a component.',
    selectedIndex: "Selected Component's Index:",
    add: 'Add',
    remove: 'Remove',
    clear: 'Clear',
  });

  setVcr = (vcr: ViewContainerRef) => (this.vcr = vcr);

  add = () =>
    (this.vcr.createComponent(DynamicComponent).instance.index =
      this.vcr.length - 1);

  remove = () => this.vcr.remove(this._selectedIndexSubject.value);

  clear = () => this.vcr.clear();
}
