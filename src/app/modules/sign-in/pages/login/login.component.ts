import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../../services/sign-in.service';
import { Router } from '@angular/router';
import PouchDB from 'pouchdb';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  isSubmitted: boolean = false;
  errorMessage: string | null = null;
  private localDb = new PouchDB('local_auth_cache');

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private signInService: SignInService,
    private router: Router
  ) { }

  ngOnInit() { }

  onSubmit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const payload = {
      username: this.loginForm.value.username as string,
      password: this.loginForm.value.password as string,
    };

    this.isLoading = true;
    this.errorMessage = null;
    
    this.signInService.login(payload).subscribe({
      next: async (response) => {
        localStorage.setItem('token', response);
        await this.syncToPouchDB(payload);
        this.completeSuccessfulLogin();
      },
      error: async (err) => {
        console.warn('API authentication failed or server unreachable. Checking PouchDB fallback...');
        const isPouchDbValid = await this.validateWithPouchDB(payload);

        if (isPouchDbValid) {
          localStorage.setItem('token', 'local-pouchdb-session-token');
          this.completeSuccessfulLogin();
        } else {
          this.errorMessage = err.error?.message || 'Invalid Username or Password (Local & Remote)';
          this.isLoading = false;
        }
      }
    });
  }
  
  private completeSuccessfulLogin() {
    this.loginForm.reset();
    this.isSubmitted = false;
    this.isLoading = false;
    this.router.navigate(['/dashboard']);
  }
  
  private async validateWithPouchDB(payload: { username: string; password: string }): Promise<boolean> {
    try {
      const cachedUser: any = await this.localDb.get(payload.username);

      if (cachedUser && cachedUser.password === payload.password) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }
  
  private async syncToPouchDB(payload: { username: string; password: string }) {
    try {
      const existingDoc: any = await this.localDb.get(payload.username).catch(() => null);

      await this.localDb.put({
        _id: payload.username,
        password: payload.password,
        _rev: existingDoc ? existingDoc._rev : undefined
      });
    } catch (e) {
      console.error('Failed to sync credentials locally to PouchDB:', e);
    }
  }
}