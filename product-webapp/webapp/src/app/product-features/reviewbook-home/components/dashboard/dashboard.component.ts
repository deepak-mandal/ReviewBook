import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/app/product-features/reviewbook-home/services/all-product.service';
// import { ChangeDetectionStrategy, Input } from "@angular/core";
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  items: any[];
  productData: any[] = []
  topReviewedProducts: any[] = [];
  constructor(
    private allProduct: AllProductService,
    private router: Router
  ) {
    this.items = [];
  }
  rowData:any
  ngOnInit(): void {
    this.getProducts()
    console.log(this.topReviewedProducts)
  }
  getProducts() {
    this.allProduct.getAllProducts().subscribe(resp => {
      this.items = resp;
      this.items.forEach(entity => {
        if (entity.averageRating >= 3) {
          this.topReviewedProducts.push(entity);
        }
      })
    })
  }

  onTabChange(event){
    console.log(event);
    this.getProducts()
    this.rowData = this.topReviewedProducts

  }

  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;
  columnDefs: ColDef[] = [
    { field: 'productName', },
    { field: 'description', },
    { field: 'category', },
    { field: 'averageRating', }
  ];

  
  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    filter: true,
    cellStyle: { color: 'rgb(82, 54, 171)' }
  };

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

  onRowClicked(event: any) {
    console.log(event.data.productId)
    const prodId = event.data.productId
    this.router.navigateByUrl(`/review/${prodId}`);
  }

}


