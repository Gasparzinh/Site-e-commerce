import { Component, OnInit } from '@angular/core';
import { CelularService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  celulares:any;
  celularService:CelularService;

  constructor(celularService:CelularService) { 
    this.celularService=celularService}

    ngOnInit(): void {

      this.celulares=this.celularService.getCelular().subscribe((data=>{

        this.celulares=data;
        console.log(this.celulares);
      }))
    }




}

