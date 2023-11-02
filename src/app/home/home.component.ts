import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ArtWork, UserdataService } from 'src/userdata.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ApiCallService } from '../api-call.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngOnInit(): void {
  //   this.userData = this.paginator;
  // }
  // page:number = 1;
  count: number = 0;
  tableSize: number = 12;
  tableSizes: any = [6, 12, 24, 60];
  limit: number = 20;

  public page = 1;
  // public pageSize = 10;



  userData: ArtWork[] = [];

  constructor(private userDataService: UserdataService, private router: Router) {
    let userdata = this.userDataService.getUserdata().subscribe((res: any) => {
      console.log(res);
      this.userData = res?.data;
    });
  }

  viewMore(id: number) {
    console.log("It works");
    this.router.navigate(['view-more', id]);
  }

  addToWish(data:any){
    // console.log(`Product Added with id: ${id}`);
    // this.router.navigate(['wishlist']);
    this.userDataService.addtoCollection(data);
    

  }
  goToWishList() { this.router.navigate(['wishlist']); }

  onTabChange(event: any): void {
    this.page = event;
  }
  p: number = 1; // set the default pagination page number
  pageSize: number = 6; // set the default pagination page size
  
  // function to change the pagination page size
  changePageSize(size: number) {
    this.pageSize = size;
    this.p = 1; // reset the current page to 1
  }
}
