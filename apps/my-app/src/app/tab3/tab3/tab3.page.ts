import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-worksapce-tab3',
  templateUrl: 'tab3.page.html',
})
export class Tab3Page implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('init tab3');
    
  }
  ngOnDestroy(): void {
    console.log('destroy tab3');
  }

  ionViewWillEnter() {
    console.log('enter tab3');
  }

  ionViewWillLeave() {
    console.log('leave tab3');
  }
}
