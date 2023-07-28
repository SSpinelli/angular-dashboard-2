import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav

  closeSideNav() {
    this.sidenav.mode = "over"
    this.sidenav.close()
    console.log(this.liveUrl.includes('dashboard'))
  }

  openSideNav() {
    this.sidenav.mode = "side"
    this.sidenav.open()
    console.log(this.sidenav.mode)
  }

  setNewRoute(payload:string) {
    this.liveUrl = window.document.URL
    return payload
  }

  liveUrl = window.document.URL
}
