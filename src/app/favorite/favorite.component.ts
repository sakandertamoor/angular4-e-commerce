import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs:['isFavorite']
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite =!this.isFavorite;
  }

}
