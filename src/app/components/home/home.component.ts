import { FakeauthService } from './../demo/demo6/services/fakeauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isConnected! : boolean

  constructor(
    private service : FakeauthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this.service.isConnected
  }

}
