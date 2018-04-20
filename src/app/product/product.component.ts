import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 items = ["Angular","Vuejs","React","Reactjs"]
  newItem="";

  pushItem = function(){
    if(this.newItem !="") {
      this.items.push(this.newItem);
      this.newItem="";
    }
  }
  constructor() { }
 

  ngOnInit() {
  }

}
