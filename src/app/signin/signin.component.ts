import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router , RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  errorMessage: string | null = null ;


  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });


  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService.login(rawForm.email,rawForm.password).subscribe({
      next : ()=>{
         this.router.navigateByUrl('/'); 
        },
      error : (err)=> {
        this.errorMessage = err.code;
       }
    
    })
  }



}
