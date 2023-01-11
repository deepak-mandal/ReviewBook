import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { Products } from '../../models/products';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {



  "username" = window.sessionStorage.getItem("username");


  categories = ["Select", "Electronics", "Clothing", "Utility"];

  reactiveForm: any = FormGroup;
  selectedFile!: File;
  isImageSaved: boolean = false;
  cardImageBase64: string | undefined;

  constructor(private fb: FormBuilder, private productsService: ProductsService
  ) {
    this.reactiveForm = this.fb.group({
      //"docId": new FormControl(''),
      //"productId": new FormControl(''),
      "productName": new FormControl('', [Validators.required, Validators.minLength(5)]),
      "description": new FormControl('', [Validators.required, Validators.minLength(5)]),
      "verificationId": new FormControl(''),
      "category": new FormControl(''),
      //"averageRating": new FormControl(''),
      //"specs": new FormControl(''),
      "username": window.sessionStorage.getItem("username"),
      'specs': new FormArray([]),


    });
  }

  onAddSpecifications() {
    const description = new FormControl(null, Validators.required);
    (<FormArray>this.reactiveForm.get('specs')).push(description);
  }

  onDeleteSpecifications(id: number) {
    (<FormArray>this.reactiveForm.get('specs')).removeAt(id);
  }

  onReset() {
    this.reactiveForm.reset();
    while ((<FormArray>this.reactiveForm.get('specs')).length != 0) {
      (<FormArray>this.reactiveForm.get('specs')).removeAt(0);
    }
  }

  submitData() {
    const item = this.reactiveForm.value;
    const uploadFileData = new FormData();
    uploadFileData.append('item', JSON.stringify(item));
    uploadFileData.append('image', this.selectedFile);
    this.productsService.createProducts(uploadFileData)
      .subscribe(
        (response) => {
          alert("added successfully");
          window.location.reload();
        },
        (err) => console.log('Error Occured during saving: ' + err.message)
      );
  }

  fileChangeEvent(fileInput: any) {
    const image = fileInput.target.files[0];
    this.selectedFile = image;

    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs: any) => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  allProduct: any;

  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos() {
    this.productsService
      .getProducts()
      .subscribe(
        (data) => {
          this.allProduct = data;
        }
      )
  }

  productData: any = [];


  //for delete operation
  deleteProduct(product: any) {
    this.productsService.deleteProduct(product).subscribe(() => { this.productData })
    window.location.reload();
  }





  //for two way data binding
  productObj = {
    productId: 0,
    productName: "",
    description: "",
    verificationId: "",
    category: "",
    specs: []
  }


  isEdit: boolean = false;


  //for Update operation
  prodId: string = ""
  editProduct(product: any) {
    this.isEdit = true
    this.productObj = product
    this.prodId = product.productId;
    this.reactiveForm.patchValue({
      'productName': this.productObj.productName,
      'description': this.productObj.description,
      'verificationId': this.productObj.verificationId,
      'category': this.productObj.category,
      'username': window.sessionStorage.getItem("username")
    });

    for (let specs of this.productObj.specs) {
      const description = new FormControl(specs, Validators.required);
      (<FormArray>this.reactiveForm.get('specs')).push(description);
    }

  }

  updateProduct(product: Products) {
    this.isEdit = !this.isEdit;
    this.reactiveForm.value['productId'] = this.prodId;
    const item = this.reactiveForm.value;
    const uploadFileData = new FormData();
    uploadFileData.append('item', JSON.stringify(item));
    uploadFileData.append('image', this.selectedFile);
    this.productsService.updateProduct(uploadFileData, this.prodId)
      .subscribe(
        (response) => {
          window.location.reload();
        },
        (err) => console.log('Error Occured during saving: ' + err.message)
      );

  }



}
