import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcsEaK1dpRqqrPUbSucUNPRIJlUj8cxSE',
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            )
            .pipe(catchError(this.handleError))
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcsEaK1dpRqqrPUbSucUNPRIJlUj8cxSE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
        .pipe(catchError(this.handleError))
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred'
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage)
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS': errorMessage = 'The email address is already in use by another account';
                break;
            case 'OPERATION_NOT_ALLOWED': errorMessage = 'Password sign-in is disabled for this project';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER': errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
                break;
            case 'EMAIL_NOT_FOUND' : errorMessage = 'The email address does not exist';
                break;
            case 'INVALID_PASSWORD': errorMessage = 'The password is not correct';
                break;
        }
        return throwError(errorMessage)
    }
}