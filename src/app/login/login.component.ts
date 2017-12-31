import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : {};
  
  constructor(private dialogRef : MatDialogRef<LoginComponent>) { }

  ngOnInit() {
      this.user = {'remember' : false};
  }

  onSubmit(){
    console.log("User : " + this.user);
    this.dialogRef.close();
  }

}
