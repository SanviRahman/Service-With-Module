import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userdata:any[]=[];

  constructor(private userService:UserdataService){
    this.userdata= this.userService.getUserObj();
  }
}
