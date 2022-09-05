import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-number3',
  templateUrl: './number3.component.html',
  styleUrls: ['./number3.component.scss']
})
export class Number3Component implements OnInit {

  constructor(private appservies:AppService) { }

  ngOnInit(): void {
    this.appservies.welcomecompounent('number3');
  }

}
