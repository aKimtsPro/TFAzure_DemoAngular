import { FakeauthService } from './services/fakeauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  demo6IsConnected! : boolean

  constructor(
    private monService : FakeauthService
  ) { }

  ngOnInit(): void {
    this.demo6IsConnected = this.monService.isConnected
  }

  connexion() {
    this.monService.login()
    this.demo6IsConnected = this.monService.isConnected

  }

  deconnexion() {
    this.monService.logout()
    this.demo6IsConnected = this.monService.isConnected

  }

}
