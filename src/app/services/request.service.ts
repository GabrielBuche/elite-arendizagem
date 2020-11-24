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

  setUser(dados): Observable<any> {
    let params = {
      "user": dados.user,
      "password": dados.password
    }
    return this.http.post(this.url + '/user', params, this.options)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getUser(dados): Observable<any> {
    return this.http.get(this.url + '/user?user=' + dados, this.options)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getClient(): Observable<any> {
    return this.http.get(this.url + '/client', this.options)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  setClient(dados): Observable<any> {
    let params = {
      "nome": dados.nome,
      "endereco": dados.endereco,
      "bairro": dados.bairro,
      "cidade": dados.cidade,
      "estado": dados.estado,
      "cep": dados.zip,
    }

    return this.http.post(this.url + '/client', params, this.options)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  updateClient(dados, id): Observable<any> {
    let params = {
      "nome": dados.nome,
      "endereco": dados.endereco,
      "bairro": dados.bairro,
      "cidade": dados.cidade,
      "estado": dados.estado,
      "cep": dados.zip,
    }
    return this.http.patch(this.url + '/client/' + id, params, this.options)
      .pipe(
        retry(2),
        catchError(this.handleError)) 
  }


  public removeClient(id): Observable<any> {

    return this.http.delete(this.url + '/client/' + id, this.options)
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
