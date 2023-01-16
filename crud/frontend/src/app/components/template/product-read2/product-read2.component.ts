import { Product } from './../../product/product.model';
import { Component,OnInit } from '@angular/core';


const ELEMENT_DATA: Product[] = [
  {id: 1, name: 'Hydrogen', price: 1.0079},
  {id: 2, name: 'Helium', price: 4.0026},
  {id: 3, name: 'Lithium', price: 6.941},
  {id: 4, name: 'Beryllium', price: 9.0122},
  {id: 5, name: 'Boron', price: 10.811},
  {id: 6, name: 'Carbon', price: 12.0107},
  {id: 7, name: 'Nitrogen', price: 14.0067},
  {id: 8, name: 'Oxygen', price: 15.9994},
  {id: 9, name: 'Fluorine', price: 18.9984},
  {id: 10, name: 'Neon', price: 20.1797},
];


@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {
      
  }
}
