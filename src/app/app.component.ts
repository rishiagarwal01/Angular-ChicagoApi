import { Component, OnInit, ViewChild } from '@angular/core';
import { UserdataService } from 'src/userdata.service';
import { Router } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angapidemo';

  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  ngOnInit(): void {
      this.userData=this.paginator;
  }
  // count:number = 0;
  // tableSize:number =12;
  // tableSizes:any=[6,12,24,60];
  // limit: number = 20;

  // public page=1;
  // public pageSize=10;
  


  userData: any = [];
  constructor(private userDataService: UserdataService ,private router: Router) {
    let userdata = this.userDataService.getUserdata().subscribe((res: any) => {
      console.log(res);
      this.userData = res?.data;
    });
  }

  viewMore(id:number) {
    console.log("It works");
    this.router.navigate(['view-more', id]);
  }
 

  // onTabChange(event:any):void {
  //   this.page=event;
  // }

}
