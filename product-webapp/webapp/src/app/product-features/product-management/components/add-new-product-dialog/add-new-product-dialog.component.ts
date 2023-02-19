import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReviewData } from 'src/app/product-features/review-management/types/review.interface';
import { Product } from '../../models/product';
import { NewProductService } from '../../services/new-product.service';

@Component({
  selector: 'add-new-product-dialog',
  templateUrl: './add-new-product-dialog.component.html',
  styleUrls: ['./add-new-product-dialog.component.scss']
})
export class AddNewProductDialogComponent implements OnInit {

  constructor(private newProductService: NewProductService, private router: Router,
    public dialogRef: MatDialogRef<AddNewProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReviewData,) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  "username" = window.sessionStorage.getItem("username");

  productForm = new FormGroup({
    'productName': new FormControl(null, Validators.required),
    'productDescription': new FormControl(null, Validators.required),
    'verificationId': new FormControl(null, Validators.required),
    'category': new FormControl(null, Validators.required),
    'specifications': new FormArray([])
  });

  categories = ["Select", "Electronics", "Clothing", "Utility"];
  selectedFile!: File;
  isImageSaved: boolean = false;
  cardImageBase64: string | undefined;
  uploadedImage: any;

  ngOnInit(): void {
    this.newProductService.getAllProducts().subscribe(
      (data) => {
      }
    );
  }

  onSubmit() {
    const newProduct = new Product(
      window.sessionStorage.getItem("username"),
      this.productForm.value['productName'],
      this.productForm.value['productDescription'],
      this.productForm.value['verificationId'],
      this.productForm.value['category'],
      this.productForm.value['specifications']
    );

    const uploadFileData = new FormData();
    uploadFileData.append('item', JSON.stringify(newProduct));
    uploadFileData.append('image', this.selectedFile);
    this.newProductService.addNewProduct(uploadFileData).subscribe(
      (data) => {
        window.alert("Product added successfully !");
        this.onReset();
      },
      error => console.log("Some error occured.! " + error)
    )
    this.router.navigate(['/products']).then(() => {
      window.location.reload();
    });

  }

  onAddSpecifications() {
    const description = new FormControl(null, Validators.required);
    (<FormArray>this.productForm.get('specifications')).push(description);
  }

  onDeleteSpecifications(id: number) {
    (<FormArray>this.productForm.get('specifications')).removeAt(id);
  }

  onReset() {
    this.productForm.reset();
    this.uploadedImage = null;
    while ((<FormArray>this.productForm.get('specifications')).length != 0) {
      (<FormArray>this.productForm.get('specifications')).removeAt(0);
    }
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
          this.uploadedImage = imgBase64Path
          this.isImageSaved = true;
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  addProduct() {
    this.onSubmit()
  }
}
