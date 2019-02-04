import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Operation } from '../entities/operation.entity';
import { Result } from '../entities/hello-world.entity';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('expects service to fetch data with proper sorting',
    inject([HttpTestingController, AppService],
      (httpMock: HttpTestingController, service: AppService) => {
        let operation = new Operation();
        let result = new Result();
        result.operacion = '7';
        result.status = true;
        operation.operacion = "5+2";
        // We call the service
        service.getOperationResult(operation).subscribe(data => {
          expect(data.operacion).toBe("7");
          expect(data.status).toBeTruthy();
        });
        // We set the expectations for the HttpClient mock
        const req = httpMock.expectOne('http://107.23.58.217/calculadora/hello/calculadora');
        expect(req.request.method).toEqual('POST');
        // Then we set the fake data to be returned by the mock
        req.flush({ operacion: '7', status: true });
      }));
});
