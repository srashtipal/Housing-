import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Iproperty } from '../Property/Iproperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
    getAllProperties(SellRent:number) : Observable<Iproperty[]>
{
  return this.http.get('data/properties.json').pipe(
    map(data=>{
      // const propertiesArray: Array<Iproperty> = [];
      // for(const id in data)
      // {
        
      //   if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
      //     propertiesArray.push(data[id]);
      //   }
     // }
      //return propertiesArray;

      const propertiesArray : Array<Iproperty> =[];
        const jsonData = JSON.stringify(data)
        const tmp: Array<Iproperty> = JSON.parse(jsonData);
        for(const id in tmp){
          if(tmp[id].SellRent == SellRent)
          propertiesArray.push(tmp[id])
        }
        return propertiesArray;
    }

    )
  )
} 

}
