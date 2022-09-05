import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-tow',
  templateUrl: './tow.component.html',
  styleUrls: ['./tow.component.scss']
})
export class TowComponent implements OnInit {
  name = 'app-tow';
  @Input() username :string = "";
  @Output() btnchiek :EventEmitter<boolean>=new EventEmitter<any>();
  

  constructor(private appservies:AppService) { }

  ngOnInit(): void {
    this.appservies.welcomecompounent('tow componenet');
  }

}
