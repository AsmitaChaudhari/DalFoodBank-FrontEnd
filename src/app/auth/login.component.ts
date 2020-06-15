import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { AuthenticationService } from './authentication.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  submitted = false;
  isLoading = false;
  pwdPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  logout() {
    this.authenticationService.setIsAuth(false);
  }
  login() {
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }else{

      this.authenticationService.setIsAuth(true);
      this.router.navigate(['/home']);
    }


  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      pwd: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
      remember: true,
    });
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     this.router.navigate(['home']);
  //   } else {
  //     return;
  //   }
  // }
}
