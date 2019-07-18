import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: 'app-inputotp',
  templateUrl: './inputotp.component.html',
  styleUrls: ['./inputotp.component.css']
})
export class InputotpComponent implements OnInit {

  otpForm:  FormGroup;
  

  public sendOTPobj: any = {
    "mdn": "string",
    "otp": 0
  };
  public validateOTPobj: any = {

    "mdn": "string",
    "otp": 0
  };
  public validate: boolean = false;
  _firstPin = new FormControl('');
  _secondPin = new FormControl('');
  _thirdPin = new FormControl('');
  _fourthPin = new FormControl('');
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router : Router
    
    ) { }

    ngOnInit() {
      this.otpForm = this.formBuilder.group({
        firstPin: this._firstPin,
        secondPin: this._secondPin,
        thirdPin: this._thirdPin,
        fourthPin: this._fourthPin
       

    });
    }

    get getFormControls() {
      return this.otpForm.controls;
      
    }

    onSubmit(){
      
    
      console.log("firstPin....",this.otpForm.controls.firstPin.value);
      
      console.log("secondPin....",this.otpForm.controls.secondPin.value);
      
      console.log("thirdPin....",this.otpForm.controls.thirdPin.value);
      
      console.log("fourthPin....",this.otpForm.controls.fourthPin.value);

      this.router.navigate(['/idcreation']);

      
   }

  public NextClick() {
   
    console.log("firstPin....",this.otpForm.controls.firstPin.value);
    this.http.post('https://test.dikshatech.com/windmill/user-services/v1/wm/guest/otp/send', this.sendOTPobj).subscribe((sucess) => {
      this.validate = true;
      
    })

    if (this.validate) {
      this.ValidateFunction()
      




    }

  }
  public ValidateFunction() {
    this.http.post('https://test.dikshatech.com/windmill/user-services/v1/wm/otp/validate', this.validateOTPobj).subscribe((sucess) => { });
  }



}

