import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface ArtWork{
  id:number;
  title:string;
  image_id:string |null;
  artist_title:string |null;
  thumbnail:{
    alt_text:string | null;
  }
  date_display:string | null;
  department_title:string | null;
}
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { 
    
  }

  addtoCollection(data: ArtWork)
  {  
    const favData = JSON.parse(localStorage.getItem('favData') || '{}');
     console.log(favData);
    if (favData[data.id]) {
      alert(`${data.title} already in favourites!`);
    } else {
   
      favData[data.id] = data;
      localStorage.setItem('favData', JSON.stringify(favData));
      let item=localStorage.getItem('favData')
      console.log(item)
      alert(`${data.title} added to favourites!`);
    }
 
 
 
   
}
  getUserdata()
  {
    // let apiurl="https://jsonplaceholder.typicode.com/posts";
    // let apiurl ="https://fakestoreapi.com/products";
    let apiurl="https://api.artic.edu/api/v1/artworks?page=1&limit=100";

    return this.http.get(apiurl);
  }
}
