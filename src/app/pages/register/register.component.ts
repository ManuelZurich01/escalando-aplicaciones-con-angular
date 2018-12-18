import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    password: new FormControl(''),
} );

  constructor() { }

  ngOnInit() {
  }

}
