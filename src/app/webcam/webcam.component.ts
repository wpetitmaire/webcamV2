import { Component, OnInit } from '@angular/core';
import { LIVE_URL } from '../common/constants';
// const config = require('config');

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent implements OnInit {

  public liveUrl: String = LIVE_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
