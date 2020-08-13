import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PWA';
  employee: any = [];
  constructor(private swupdate: SwUpdate,private httpCient:HttpClient) {
    this.swupdate.available.subscribe((event: any) => {
      // reload / refresh the browser
      this.swupdate.activateUpdate().then(() => document.location.reload());
    });
    this.getData();
  }

  getData(){
    this.httpCient.get("https://reqres.in/api/users").subscribe((res:any)=>{
this.employee = res.data;
    });
  }
}
