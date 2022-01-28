import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-cell',
  templateUrl: './custom-cell.component.html',
  styleUrls: ['./custom-cell.component.scss']
})
export class CustomCellComponent implements OnInit {

  data!:any;
  params!:any;

  constructor() { }

  agInit(params:any){
    this.params = params;
    this.data = params.value;
  }
  excute(){

    console.log(this.params.data)
    this.params.context.parentComponent.clearRowsData()
  }

  ngOnInit(): void {
  }

}
