import { Component } from '@angular/core';

@Component({
  selector: 'my-app-worksapce-admin',
  templateUrl: './admin.component.html',
  styles: [],
})
export class AdminComponent {
  ionViewWillEnter() {
    console.log('enter admin');
  }

  ionViewWillLeave() {
    console.log('leave admin');
  }
}
