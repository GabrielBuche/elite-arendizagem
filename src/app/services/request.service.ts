import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url = 'http://localhost:3000';
  options = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    return this.http.get(this.url + '/users', this.options)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  public setUser(data): Observable<any> {
    let params = {
      "nome": data.nome,
      "endereco": data.endereco,
      "bairro": data.bairro,
      "cidade": data.cidade,
      "estado": data.estado,
      "cep": data.zip,
    }
    return this.http.post(this.url + '/users', params, this.options)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  public removeUser(id): Observable<any> {

    return this.http.delete(this.url + '/users/' + id, this.options)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  public updateUser(id, data): Observable<any> {
    let params = {
      "nome": data.nome,
      "endereco": data.endereco,
      "bairro": data.bairro,
      "cidade": data.cidade,
      "estado": data.estado,
      "cep": data.zip,
    }
    return this.http.patch(this.url + '/users/' + id, params, this.options)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
