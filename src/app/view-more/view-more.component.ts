import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent  {
  @Input() demo: any;
  @Output() event = new EventEmitter<any>();

  artwork:any;
  
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.http.get(`https://api.artic.edu/api/v1/artworks/${id}`).subscribe((response: any) => {
        this.artwork = response.data
      });
    });
   }

}

