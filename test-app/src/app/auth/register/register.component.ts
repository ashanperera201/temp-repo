import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { CustomValidators } from 'src/app/utils/custom-validators';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm = () => {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl(null, [Validators.required]),
      count: new FormControl(null),
      selectType: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: [null, Validators.compose([
        Validators.required,
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidators.patternValidator(/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/, { hasSpecialCharacters: true }),
        Validators.minLength(8)])
      ],
      confirmPassword: [null, Validators.compose([Validators.required])]
    },
      {
        validator: CustomValidators.passwordMatchValidator
      })
  }

  onSubmit = () => {
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      // send data to service .
      const payload = {
        "title": "-",
        "imageUrl": "-",
        "authorName": "-",
        "totalLikes": 0,
        "firstName": this.registerForm.get('firstName')?.value,
        "count": this.registerForm.get('count')?.value,
        "type": true,
        "email": this.registerForm.get('email')?.value,
      }

      this.httpClient.post('http://localhost:4308/api/generic', payload).subscribe(serviceRes => {
        
      })
    } else {
      // show error message.
    }
  }

}
