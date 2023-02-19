import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Products } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-update-product-dialog',
  templateUrl: './update-product-dialog.component.html',
  styleUrls: ['./update-product-dialog.component.scss']
})
export class UpdateProductDialogComponent implements OnInit {
  reactiveForm: any = FormGroup;
  selectedFile!: File;
  isImageSaved: boolean = false;
  cardImageBase64: string | undefined;
  //for two way data binding
  productObj = {
    productId: 0,
    productName: "",
    description: "",
    verificationId: "",
    category: "",
    specs: []
  }
  constructor(private fb: FormBuilder, private productsService: ProductsService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.reactiveForm = this.fb.group({
      "productName": new FormControl('', [Validators.required, Validators.minLength(2)]),
      "description": new FormControl('', [Validators.required, Validators.minLength(2)]),
      "verificationId": new FormControl(''),
      "category": new FormControl(''),
      "username": window.sessionStorage.getItem("username"),
      'specs': new FormArray([]),
    });
  }

  categories = ["Select", "Electronics", "Clothing", "Utility"];

  ngOnInit(): void {
    console.log(this.data)
    this.editProduct(this.data.product);
  }

  isEdit: boolean = false;
  onNoClick(): void {
    this.dialogRef.close();
  }

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

  onAddSpecifications() {
    const description = new FormControl(null, Validators.required);
    (<FormArray>this.reactiveForm.get('specs')).push(description);
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

  updateProduct(product: Products) {
    this.data.isEdit = !this.data.isEdit;
    this.reactiveForm.value['productId'] = this.data.product.productId
    const item = this.reactiveForm.value;
    const uploadFileData = new FormData();
    uploadFileData.append('item', JSON.stringify(item));
    uploadFileData.append('image', this.selectedFile);
    this.productsService.updateProduct(uploadFileData, this.data.product.productId)
      .subscribe(
        (response) => {
          this.snackBar.open("Product updated successfully."), {
            duration: 1,
          };
        },
        (err) => console.log('Error Occured during saving: ' + err.message)
      );
  }

}
