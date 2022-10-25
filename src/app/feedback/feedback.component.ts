import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  url = 'http://localhost:4200/#/home';
  User = this.fb.group({
    "email": ["", [Validators.email, Validators.required]],
    "name": ["", [Validators.required]],
  })
  focus: boolean;
  focus1: boolean;

  constructor( private fb: FormBuilder, private router:Router) { }

  get form1() {
    return this.User.controls
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let text = 'Do you want to send your feedback'
    // tslint:disable-next-line:triple-equals
    if (confirm(text) == true) {
      text = 'Confirm';
      alert('Feedback was send!');
      console.log(this.User.value);

      this.router.navigate(['/home'])
    }
    else {
      alert('please enter again')
    }

  }
}
