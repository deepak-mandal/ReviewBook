import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Like } from 'src/app/models/like';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/review.service';
import { NewProductService } from 'src/app/SERVICE/new-product.service';
import { RatingService } from 'src/app/SERVICE/rating.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  userName : string = sessionStorage.getItem('username');
  l : Like = new Like();
  
  

  userform:FormGroup;
  reviewobj: Review= new Review();
  allreviews: any;
  


  productId;
  product:any;
  rating=0;
  hasRated = false;
  alertMsgSent = false;
  ratingArr = [0,1,2,3,4];
  durationInSeconds = 5;
  

  constructor(private rs:ReviewService, private activateRoute: ActivatedRoute, private newProductService: NewProductService, private formBuilder:FormBuilder,private ratingService: RatingService,private snackBar: MatSnackBar ) { }
  user = window.sessionStorage.getItem("username");
  todayNumber: number = Date.now();

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['productId'];
    console.log("product id in review:", this.productId);
    this.newProductService.getById(this.productId).subscribe((data) => {
      this.product = data;
      console.log("product");
      console.log(this.product);
    })
    this.getreview();
    this.userform=new FormGroup({
      "productId" : new FormControl(this.productId),
      "user" : new FormControl(this.user),
      "title" : new FormControl(""),
      "date" :new FormControl(""),
      "text" : new FormControl("",[Validators.required, Validators.minLength(2)])
    });
  }

  // updateSetting(event) {
  //   this.rating = event.value;
  // }
  // getUserName () : String {
  //   return sessionStorage.getItem('username');
  // }

  onClick(r:number) {
    this.rating = r; 
    this.hasRated = true;
    this.openSnackBar();
    console.log(this.rating);
    this.ratingService.rateTheProduct(sessionStorage.getItem('username'),this.rating,this.productId).subscribe(()=>{
  });
  }

  openSnackBar() {
    this.snackBar.open("You Have Rated "+this.rating+" out of 5"), {
      duration: 1,
    };
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {

      return 'star_border';
    }
  }

  getUserName(){
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
      (data) =>  {
        this.allreviews = data;
        console.log("all product is :", this.allreviews);
        console.log(typeof this.allreviews)
      }
    )
  }
 

  saveForm(){
    console.log('Form data is ', this.userform.value);
    this.reviewobj.text=this.userform.value.text;
    this.reviewobj.userName=this.userform.value.user;
    this.reviewobj.productId=this.userform.value.productId;
    // this.reviewobj.date=this.userform.value.date;
    // this.reviewobj.reviewdusername.add(this.user);
    console.log(this.reviewobj)
    this.rs
    .sendreview(this.reviewobj)
    .subscribe((response) => {
      console.log(response);
      // this.router.navigate(['/home']).then(() => {
        window.location.reload();
      // });
    }
    );
}
// liked() : boolean {
//   //  console.log(this.reviewobj.likedUsernames.has(this.userName))
//   //  return !this.reviewobj.likedUsernames.has(this.userName);
//   if(this.reviewobj.likedUsernames.indexOf(this.userName)==-1){
//     return false;
//   }
//   else{
//     return true;
//   }
// }
// like(r: Review){
//   r.likeCount++;
//   // r.likedUsernames.push(this.userName);
//   this.l.userName=this.userName;
//   this.l.reviewId=r.reviewId;
//   this.rs.LikeService(this.l);
// }
// unlike(r:Review){
//   r.likeCount--;
//   // r.likedUsernames.(this.userName);
//   const index: number = r.likedUsernames.indexOf(this.userName);
//     r.likedUsernames.splice(index, 1);
//   this.l.userName=this.userName;
//   this.l.reviewId=r.reviewId;
//   this.rs.UnlikeService(this.l);
  
// }
}
