import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {

  myValue! : number
  constructor(
    private ar : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.myValue = this.ar.snapshot.params['id']
  }

}
