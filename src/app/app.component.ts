import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  object = "Testing Section";
  array = "Array Testing";
  ifTesting = "If Testing";
  ifElse = "If Else Tesing";
  ifThenElse = "If Then Else Testing";
  isTrue=true;
  ifTrueFirst = true;


  obj ={
    "id" : 1,
    "name" :"sapna"
  }

  items = ["Angular","Vuejs","React","Reactjs"]

 
}
