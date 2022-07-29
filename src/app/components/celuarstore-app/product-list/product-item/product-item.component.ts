import { Component,Input, OnInit } from '@angular/core';
import { Celular } from './model/celular';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  celular!:Celular;
  constructor() { }

  ngOnInit(): void {
  }

}
