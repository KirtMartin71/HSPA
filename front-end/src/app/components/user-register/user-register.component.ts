import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    },{validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched: true};
  }

  onSubmit() {
    console.log(this.registrationForm);
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

}
