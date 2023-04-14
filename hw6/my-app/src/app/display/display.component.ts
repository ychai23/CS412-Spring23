import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
  }
  ngOnChanges(): void {
  }
}