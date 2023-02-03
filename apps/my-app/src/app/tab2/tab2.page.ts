import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-worksapce-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('init tab2');
    
  }
  ngOnDestroy(): void {
    console.log('destroy tab2');
  }

  ionViewWillEnter() {
    console.log('enter tab2');
  }

  ionViewWillLeave() {
    console.log('leave tab2');
  }
}
