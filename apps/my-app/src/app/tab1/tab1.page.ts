import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-worksapce-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('init tab1');
    
  }
  ngOnDestroy(): void {
    console.log('destroy tab1');
  }

  ionViewWillEnter() {
    console.log('enter tab1');
  }

  ionViewWillLeave() {
    console.log('leave tab1');
  }
}
