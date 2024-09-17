import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<any> = [
    {
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
    },

    {
      "Id":2,
      "Name":"Kukreja House",
      "Type":"House",
      "Price":18000
      },
      {
        "Id":3,
        "Name":"Sharma Nivas",
        "Type":"House",
        "Price":15000
        },
        {
          "Id":4,
          "Name":"Mishra Nivas",
          "Type":"House",
          "Price":12000
          },
          {
            "Id":5,
            "Name":"Baghel Banglow",
            "Type":"House",
            "Price":12000
            },
            {
              "Id":6,
              "Name":"Kaushik Nivas",
              "Type":"House",
              "Price":17000
              },
];

  constructor() { }

  ngOnInit(): void {
  }

}
