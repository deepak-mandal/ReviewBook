import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dkm-custom-tab',
  templateUrl: './dkm-custom-tab.component.html',
  styleUrls: ['./dkm-custom-tab.component.scss']
})
export class DkmCustomTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() data!: any[]

}
