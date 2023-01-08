import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/product-features/product-management/models/product';
import { NewProductService } from 'src/app/product-features/product-management/services/new-product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {


  "username" = window.sessionStorage.getItem("username");


  productForm = new FormGroup({
    'productName': new FormControl(null, Validators.required),
    'productDescription': new FormControl(null, Validators.required),
    'verificationId': new FormControl(null, Validators.required),
    'category': new FormControl(null, Validators.required),
    'specifications': new FormArray([])
  });

  categories = ["Select","Electronics", "Clothing", "Utility"];
  selectedFile!: File;
  isImageSaved: boolean = false;
  cardImageBase64: string | undefined;
  uploadedImage: any;

  constructor(private newProductService: NewProductService, private router: Router) { }

  ngOnInit(): void {
    this.newProductService.getAllProducts().subscribe(
      (data) => {
        console.log(data)
      }
    );
  }

  onSubmit() {
    console.log(this.productForm)

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
    console.log('Image file is : ' + this.selectedFile)
    console.log(newProduct)
    console.log(uploadFileData)

    this.newProductService.addNewProduct(uploadFileData).subscribe(
      (data) => {
        console.log(data);
        window.alert("Product added successfully !");
        this.onReset();
      },
      error => console.log("Some error occured.! " + error)
    )

    // this.router.navigate(['/home']);
    this.router.navigate(['/home']).then(() => {
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
          console.log(img_height, img_width);
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.uploadedImage = imgBase64Path
          this.isImageSaved = true;
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
    console.log(this.selectedFile)
  }


}
