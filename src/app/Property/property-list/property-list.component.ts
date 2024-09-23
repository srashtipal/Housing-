import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<Iproperty>;
  // = [
//     {
//     "Id":1,
//     "Name":"Birla House",
//     "Type":"House",
//     "Price":12000
//     },

//     {
//       "Id":2,
//       "Name":"Kukreja House",
//       "Type":"House",
//       "Price":18000
//       },
//       {
//         "Id":3,
//         "Name":"Sharma Nivas",
//         "Type":"House",
//         "Price":15000
//         },
//         {
//           "Id":4,
//           "Name":"Mishra Nivas",
//           "Type":"House",
//           "Price":12000
//           },
//           {
//             "Id":5,
//             "Name":"Baghel Banglow",
//             "Type":"House",
//             "Price":12000
//             },
//             {
//               "Id":6,
//               "Name":"Kaushik Nivas",
//               "Type":"House",
//               "Price":17000
//               },
// ];

  constructor(private housingService:HousingService ) { }

  ngOnInit(): void {
 this.housingService.getAllProperties().subscribe(
  data=>{
           this.Properties=data;
          console.log(data);
  },
   error =>{
    console.log('httperror');
    console.log(error);
   }
 )
    // this.http.get('data/properties.json').subscribe(
    //        data=>{
    //         this.Properties=data;
    //         console.log(data);
    //        }
    // );
  }
}
