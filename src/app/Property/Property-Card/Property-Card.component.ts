import { Component, Input } from "@angular/core";

@Component({
    selector:'app-Property-Card',
    //template:`<h1> Card</h1>`,
    templateUrl:`Property-Card.component.html`,
    //styles: [`h1(font-weight:normal;)`]
    styleUrls:[`Property-Card.component.css`]
})

export class PropertyCardComponent{
  //Passing data from Parent component to child component
  @Input() Property : any

  // Property:any = {
  //         "Id":1,
  //         "Name":"Birla House",
  //         "Type":"House",
  //         "Price":12000

  // };
}