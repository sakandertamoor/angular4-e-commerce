import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  inputs:['isFavorite']
})
export class FavoriteComponent {

  @Input('is-favorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  onClick(){
    this.isFavorite =!this.isFavorite;
    this.change.emit({ newValue: this.isFavorite});
  }
}
export interface FavoriteChangedEventArgs{
  newValue : boolean
}