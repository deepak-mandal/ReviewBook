import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dkm-card',
  templateUrl: './dkm-card.component.html',
  styleUrls: ['./dkm-card.component.scss']
})
export class DkmCardComponent implements OnInit {

  constructor() { }



  // @Input() products!: any[]
  @Output() productId = new EventEmitter<string>()

  ngOnInit(): void {
  }

  onReview(data: string) {
    this.productId.emit(data)
  }


  numSequence(n: number): Array<number> {
    n = Math.round(n)
    return Array(n);
  }
  numSequenceForBlankStar(n: number): Array<number> {
    n = Math.round(n)
    return Array(5 - n);
  }


  @Input('products') products: any[] = [];
  page: number = 1;
}
