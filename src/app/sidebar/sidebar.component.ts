import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  opened=true;

  constructor(){}

  toggleSidebar(){
    this.opened=!this.opened;
  }
  
  ngOnInit(): void {
  }

}
