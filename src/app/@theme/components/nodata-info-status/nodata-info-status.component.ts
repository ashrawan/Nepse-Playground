import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nodata-info-status',
  templateUrl: './nodata-info-status.component.html',
  styleUrls: ['./nodata-info-status.component.scss']
})
export class NodataInfoStatusComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
