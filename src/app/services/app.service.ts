import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../entities/hello-world.entity';
import { Operation } from '../entities/operation.entity';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private httpClient: HttpClient) { }

  getOperationResult(operation: Operation): Observable<Result> {
    //return this.httpClient.post("http://107.23.58.217/hello/calculadora", operation);
    return this.httpClient.post("http://localhost:8080/hello/calculadora", operation);
  }
}
