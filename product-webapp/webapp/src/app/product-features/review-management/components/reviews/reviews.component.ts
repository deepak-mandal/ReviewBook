import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Like } from 'src/app/product-features/review-management/model/like';
import { Review } from 'src/app/product-features/review-management/model/review';
import { ReviewService } from 'src/app/product-features/review-management/services/review.service';
import { NewProductService } from 'src/app/product-features/product-management/services/new-product.service';
import { RatingService } from 'src/app/product-features/review-management/services/rating.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DkmDialogComponent } from 'src/app/shared/dkm-dialog/dkm-dialog.component';
import { ReviewData } from '../../types/review.interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  userName: string = sessionStorage.getItem('username');
  l: Like = new Like();



  userform: FormGroup;
  reviewobj: Review = new Review();
  allreviews: any;



  productId;
  product: any;
  rating = 0;
  hasRated = false;
  alertMsgSent = false;
  ratingArr = [0, 1, 2, 3, 4];
  durationInSeconds = 5;


  constructor(
    private rs: ReviewService,
    private activateRoute: ActivatedRoute,
    private newProductService: NewProductService,
    private formBuilder: FormBuilder,
    private ratingService: RatingService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,

  ) { }
  user = window.sessionStorage.getItem("username");
  todayNumber: number = Date.now();
  isCurrentUserRated: boolean = false
  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['productId'];
    this.getProductDetails()
    this.getreview();
    this.userform = new FormGroup({
      "productId": new FormControl(this.productId),
      "user": new FormControl(this.user),
      "title": new FormControl(""),
      "date": new FormControl(""),
      "text": new FormControl("", [Validators.required, Validators.minLength(2)])
    });
  }

  getProductDetails() {
    this.newProductService.getById(this.productId).subscribe((data) => {
      this.product = data;
      for (let id of this.product.ratedUsernames) {
        if (this.user == id) {
          this.isCurrentUserRated = true
        }
      }
    })
  }

  onClick(r: number) {
    this.rating = r;
    this.hasRated = true;
    this.openSnackBar();
    this.ratingService.rateTheProduct(sessionStorage.getItem('username'), this.rating, this.productId).subscribe(() => {
      this.getProductDetails()
    });
  }

  openSnackBar() {
    this.snackBar.open("You Have Rated " + this.rating + " out of 5"), {
      duration: 1,
    };
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {

      return 'star_border';
    }
  }

  getUserName() {
    return sessionStorage.getItem('username');
  }



  // updateSetting(event) {
  //   this.rating = event.value;
  // }

  // sendRating(){
  //   this.ratingService.rateTheProduct(sessionStorage.getItem('username'),this.rating,this.productId).subscribe(()=>{
  //     this.hasNotRated = false
  //     this.alertMsg()
  //   });
  // }

  // alertMsg(){
  //   if(this.alertMsgSent == false){
  //     this.alertMsgSent = true;
  //     alert("You Have Rated");
  //   }
  // }

  // showIcon(r:number, i:number ){
  //   if(r==0){
  //     return 'star_border';
  //   }
  //   else if(r>=i){
  //     return 'star';
  //   }
  //   else return 'star_border';
  // }



  getreview() {
    this.rs
      .getProducts(this.productId)
      .subscribe(
        (data) => {
          this.allreviews = data;
        }
      )
  }


  saveForm() {
    this.reviewobj.text = this.userform.value.text;
    this.reviewobj.userName = this.userform.value.user;
    this.reviewobj.productId = this.userform.value.productId;
    this.rs
      .sendreview(this.reviewobj)
      .subscribe((response) => {
        window.location.reload();
      }
      );
  }

  comment = ''
  giveReview(): void {
    const dialogRef = this.dialog.open(DkmDialogComponent, {
      data: { title: 'Review', reviewComment: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.comment = result;
      this.reviewobj.text = result;
      this.reviewobj.userName = this.user;
      this.reviewobj.productId = this.productId;
      this.rs
        .sendreview(this.reviewobj)
        .subscribe((response) => {
          window.location.reload();
        }
        );
    });
  }

  numSequence(n: number): Array<number> {
    n = Math.round(n)
    return Array(n);
  }
  numSequenceForBlankStar(n: number): Array<number> {
    n = Math.round(n)
    return Array(5 - n);
  }
}
