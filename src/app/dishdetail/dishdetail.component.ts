import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSpinner,MatFormFieldModule,MatInputModule, MatSlider } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { visibility, flyInOut, expand } from '../animations/app.animation';

import { Comment} from '../shared/comment';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService} from '../services/dish.service';

import 'rxjs/add/operator/Switchmap';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    visibility()
  ]
})


export class DishdetailComponent implements OnInit {

  dish : Dish;
  dishcopy;
  dishIds : number[];
  prev : number;
  next : number;
  comment : Comment;
  errMess : String;
  dishdetailForm: FormGroup;
  visibility = "shown";

  formErrors = {  
    'author' : '',
    'rating' : '',
    'comment':''
  };

  validationMessages = {
    'author': {
      'required':      'Author name is required.',
      'minlength':     'Author name must be at least 2 characters long.',
      'maxlength':     'Author name cannot be more than 25 characters long.'
    },
    'rating': {
      'required':      'Please provide rating',
    },
    'comment': {
      'required':      'Please provide comment',
    }
  };

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { 
      setTimeout(()=>{this.createForm()},2000) ;
    }

  ngOnInit() {
    //let id = +this.route.snapshot.params['id'];
    //this.dishservice.getDish(id).subscribe(dish => this.dish = dish);

    this.dishservice.getDishIds().subscribe(dishIDs => this.dishIds = dishIDs,
      errmess => this.errMess = <any>errmess);
    this.route.params.switchMap
    ((params : Params) => {this.visibility = "hidden"; return this.dishservice.getDish(+params['id']); })
    .subscribe(dish => {this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); this.visibility = "shown"},
    errmess => this.errMess = <any>errmess);  
  }

  setPrevNext(dishId : number){
    let index =  this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index -1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index +1)%this.dishIds.length];
    console.log("this.prev " + this.prev + "this.next " + this.next);
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.dishdetailForm = this.fb.group({
      author: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating:[5],
      comment:['',Validators.required],
      date:'' + (new Date()).toDateString()
    });

    this.dishdetailForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit(){
    this.comment = this.dishdetailForm.value;
    console.log(this.comment);
 
    //this.dish.comments.push(this.comment);
    this.dishcopy.comments.push(this.comment);
    this.dishcopy.save()
    .subscribe(dish => this.dish = dish);

    this.dishdetailForm.reset(
        {
          author: '',
          rating: 5,
          comment:'',
          date: ''
        });
  }

  onValueChanged(data? : any){
    if (!this.dishdetailForm) { return; }
    const form = this.dishdetailForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
    
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
          //console.log(" messages[ " + key + "] : " + messages[key]);
        }
      }
    }
  }

}

