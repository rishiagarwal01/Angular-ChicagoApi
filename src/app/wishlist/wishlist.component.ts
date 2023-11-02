import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ArtWork } from 'src/userdata.service';
import { UserdataService } from 'src/userdata.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist: ArtWork[] = [];


  constructor() {}


  ngOnInit() {
    const favData = JSON.parse(localStorage.getItem('favData') || '{}');
   
      let artworkData: ArtWork;
      artworkData = favData;
     
      for (const [id, data] of Object.entries(artworkData)) {
        const artwork: ArtWork = {
          id: Number(id),
          title: data.title,
          image_id: data.image_id,
          date_display: data.date_display,
          department_title:data.department_title,
          thumbnail:{
            alt_text:data.thumbnail.alt_text,
          },
          artist_title:data.artist_title,
          // description: data.description,
        };
 
        this.wishlist.push(artwork);
        console.log(this.wishlist)
      }
   
  }
  // addToWishlist(id:number):void {
  //   this.wishlist.push(id);
  // }

  
  removeItem(id: number) {
    const favData = JSON.parse(localStorage.getItem('favData') || '{}');
    delete favData[id];
    localStorage.setItem('favData', JSON.stringify(favData));
    window.location.reload();
  }
  
  getWishlist(): any {
    return this.wishlist;
  }

}

