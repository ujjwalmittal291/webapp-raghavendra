import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public obj1: any = {

    
      "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJNb2JpbGVObyI6IjEyMzQ1Njc4OTAiLCJFbWFpbElkIjoiZ3VydUBkaWtzaGF0ZWNoLmNvbSIsInVzZXJfbmFtZSI6Imd1cnVAZGlrc2hhdGVjaC5jb20iLCJzY29wZSI6WyJXSU5ETUlMTCJdLCJleHAiOjE1NjMyODA4OTgsImF1dGhvcml0aWVzIjpbIlBFUlNPTkFMIl0sImp0aSI6Ijg1MWNiNWNkLTNjZTEtNDBjNi1iNjRiLTQwZDczOTQwYmNhMSIsImNsaWVudF9pZCI6IndpbmRtaWxsIiwiTmFtZSI6Imd1cnUifQ.V45EzgMmP8gwjN63CcykZO28Oy1j2VR3brvMvxv9q66YJsgBHzsn_WfpQCyJwEShRup74N21EPnWmSH5pJsyAGCnYzVApH2GCoc5yTI6m5WL4lzboso-a_m-nLKFbuh42Ap2bCpfngoi0LKkIEcxNJtWez5KC_gw5MUtxKKicmS7OCgTs1LeyZbaGY2FSqlwcbXjJmdmZC8Ap7pJGFaP5foO9n8VSA_dydcE69-SMPGB3b_aBCslylhIeS8Q01w16R55anPo6STCvwY9uJPGZSNRxjLJTIhNI3DcpOWmsXjbMGInMOeD960oWmZ_Oy80UTuisk2jpCSscFqfKPEJuQ",
      "token_type": "bearer",
      "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJNb2JpbGVObyI6IjEyMzQ1Njc4OTAiLCJFbWFpbElkIjoiZ3VydUBkaWtzaGF0ZWNoLmNvbSIsInVzZXJfbmFtZSI6Imd1cnVAZGlrc2hhdGVjaC5jb20iLCJzY29wZSI6WyJXSU5ETUlMTCJdLCJhdGkiOiI4NTFjYjVjZC0zY2UxLTQwYzYtYjY0Yi00MGQ3Mzk0MGJjYTEiLCJleHAiOjE1NjMyODEwOTgsImF1dGhvcml0aWVzIjpbIlBFUlNPTkFMIl0sImp0aSI6IjgxMWJmZWIxLTYzNDEtNDljNy05OTYyLWMzMTFmOWY4ZDBiNSIsImNsaWVudF9pZCI6IndpbmRtaWxsIiwiTmFtZSI6Imd1cnUifQ.CuhngSQiRusQ508VHGL2yQseow0Ta1S82CD-6PPLxpsZvIrF7Ejx8-5p_BR2XigMU9Wfx6izDhsleFrcW_JXUJsQENQ7MuV2A-KzDRYybIoLagOhgAnmcnViunQ9CeLmo5FUkWNVGpbF4Zq252KMwWQAeyboXuYMVjVL8rLAen_IamoH6VL0MdtqbEe_Cp2pu8ggdT8qj6cM4RpZ_19N0_GoNI930oBVNGxT4ZcibDZ2qZLZVNr9wQxmriuhXjwYbtwLPv_HCOsOqsJ4cMXj0rBfrnc4bE9tRs7DwfW9FQ2FSc9s6okiiTqGkUtM01dU8eC2nyCkPoqvIsthgKizQw",
      "expires_in": 3599,
      "scope": "WINDMILL",
      "MobileNo": "1234567890",
      "EmailId": "guru@dikshatech.com",
      "Name": "guru",
      "jti": "851cb5cd-3ce1-40c6-b64b-40d73940bca1"
  };


  



  public obj: any =  {
    "alternativeNumber": "12345678",
    "emailId": "draghavendra1991@gmail.com",
    "languageId": 1,
    "mobileNo": "897654321",
    "name": "DR",
    "pin": "abc",
    "signupSourceId": 1,
    "userId": "draghavendra1991@gmail.com"
  };

result2;
   

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {


  }

  public LoginClick() {

    console.log("obj1....",this.obj);
    this.http.post('https://test.dikshatech.com/windmill/oauth/token?grant_type=password&username=guru@dikshatech.com&password=555555', this.obj1).subscribe((youhavelogedin)=>{

      console.log (youhavelogedin)
      this.result2=youhavelogedin
    },

    (error)=>{
console.log(error)

    })

  

  }

  public signupClick() {
     console.log("obj....",this.obj);
    this.http.post('https://test.dikshatech.com/windmill/user-services/vm/wm/signUp',this.obj).subscribe((sucess)=>{
      console.log (sucess)
      this.result2=sucess
    },
    (error)=>{
console.log(error)
    })
    // console.log('https://test.dikshatech.com/windmill/user-services/vm/wm/signUp');

  }

}
