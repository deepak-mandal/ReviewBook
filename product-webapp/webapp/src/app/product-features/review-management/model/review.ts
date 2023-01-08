export class Review {
  productId!:string;
  userName!:string;
  title!:string;
  date!:string;
  text!:string;
  likeCount !: number;
  reviewId !: String;
  likedUsernames !: Array<string>;
  // reviewdusername !: Set<String>;
}
