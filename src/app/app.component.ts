import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Operation } from './entities/operation.entity';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  result: string;
  operation: Operation;
  ngOnInit() {
    this.operation = new Operation();
    this.operation.operacion = '';
    this.result = '';
  }



  firstRow: Tile[] = [
    { text: '7', cols: 1, rows: 1, color: 'lightblue' },
    { text: '8', cols: 1, rows: 1, color: 'lightgreen' },
    { text: '9', cols: 1, rows: 1, color: 'lightpink' },
    { text: '/', cols: 1, rows: 1, color: '#DDBDF1' },
  ];

  secondRow: Tile[] = [
    { text: '4', cols: 1, rows: 1, color: 'lightblue' },
    { text: '5', cols: 1, rows: 1, color: 'lightgreen' },
    { text: '6', cols: 1, rows: 1, color: 'lightpink' },
    { text: '*', cols: 1, rows: 1, color: '#DDBDF1' },
  ];

  thirdRow: Tile[] = [
    { text: '1', cols: 1, rows: 1, color: 'lightblue' },
    { text: '2', cols: 1, rows: 1, color: 'lightgreen' },
    { text: '3', cols: 1, rows: 1, color: 'lightpink' },
    { text: '-', cols: 1, rows: 1, color: '#DDBDF1' },
  ];

  forthRow: Tile[] = [
    { text: 'clear', cols: 1, rows: 1, color: 'lightblue' },
    { text: '0', cols: 1, rows: 1, color: 'lightgreen' },
    { text: '=', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  fifthRow: Tile[] = [
    { text: '(', cols: 2, rows: 1, color: 'lightblue' },
    { text: ')', cols: 2, rows: 1, color: 'lightgreen' }
  ];

  constructor(private helloWorldService: AppService) {

  }

  addToOperation(value: string) {
    if (value == '=') {
      this.helloWorldService.getOperationResult(this.operation).subscribe(response => {
        if(response.status == true){
          this.result = response.operacion;
        }else{
          this.result = "ERROR";
        }        
      },error => {
        this.result ="Error en comunicación";
      });

    } else if (value == 'clear') {
      this.operation.operacion = this.operation.operacion.substring(0, this.operation.operacion.length - 1);
      // } else if (value == '.') {
      //   if (this.operation.indexOf('.') == -1) {
      //     this.operation = this.operation.concat(value);
      //   }
    }
    else {
      this.operation.operacion = this.operation.operacion.concat(value);
    }
  }

}


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
