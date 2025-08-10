import { Component } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userdata: any[] = [];

  constructor(private userService: UserdataService) {
    this.userdata = this.userService.getUserObj();
  }
}
