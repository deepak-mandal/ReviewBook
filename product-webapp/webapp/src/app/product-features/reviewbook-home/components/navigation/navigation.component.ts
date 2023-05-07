import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddNewProductDialogComponent } from 'src/app/product-features/product-management/components/add-new-product-dialog/add-new-product-dialog.component';
import { AuthService } from 'src/app/product-features/user-management/services/auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  showFiller = false;

  constructor(private router: Router,
    public authService: AuthService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,) { }

  Role = window.sessionStorage.getItem("role");
  isProductOwner: boolean = false;
  ngOnInit(): void {
    if (this.Role == "Product owner") {
      this.isProductOwner = true
    }
  }

  logout() {
    sessionStorage.removeItem('authorization');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }


  addProduct() {
    const dialogRef = this.dialog.open(AddNewProductDialogComponent, {
      height: 'auto',
      width: '75vw',
      data: { title: 'Enter Product Details' },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open("Product added successfully."), {
          duration: 1,
        };
      }
    });
  }

}
