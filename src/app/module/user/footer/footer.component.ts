import { Component } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  userdata: any[] = [];

  constructor(private userService: UserdataService) {
    this.userdata = this.userService.getUserObj();
  }
}
