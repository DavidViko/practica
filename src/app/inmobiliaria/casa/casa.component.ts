import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../model/casa';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss']
})
export class CasaComponent implements OnInit {
  @Input('casa') casa: Casa;

  constructor() { 
    console.log ("Constructor casa.component");
  }

  ngOnInit() {
    console.log ("onInit casa.component");
  }
}