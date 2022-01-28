import { Component, OnInit ,ViewChild} from '@angular/core';
// import { ColDef } from 'ag-grid-community';
// import { HttpClient } from '@angular/common/http';
// import { NewsApiService } from 'src/app/news-apis/news-api.service';
// import { AgGridAngular } from 'ag-grid-angular';
// import { GridOptions } from 'ag-grid-community';
// import { CustomCellComponent } from '../custom-cell/custom-cell.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

//   gridApi!:any;
//   columnApi!:any;
//   gridOptions!:any;

//   isEditable:boolean = true;

//   @ViewChild('agGrid',{static:false}) agGrid!: AgGridAngular;

  
//   columnDefs: ColDef[] = [
//     { 
//     field: 'first_name',
//     sortable:true , 
//     filter: true,
//     checkboxSelection:true,
//     editable:this.isEditable
//     // cellRendererFramework:CustomCellComponent
//     },
//     { 
//       field: 'last_name',
//     sortable:true , 
//     filter: true,
//     editable:this.isEditable

//   },
//     {
//        field: 'username',
//     sortable:true, 
//     filter: true,
//         editable:this.isEditable

//   },
//     { 
//       field: 'password',
//       sortable:true ,
//        filter: true,
//         editable:this.isEditable

//   },
//     {
//        field: 'phone',
//        sortable:true ,
//         filter: true,
//             editable:this.isEditable
// }
// ];

// rowData = [
//   { make: 'Toyota', model: 'Celica', price: 35000 },
//   { make: 'Ford', model: 'Mondeo', price: 32000 },
//   { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];

// rowData:any[]=[];

constructor() {
  
  // private http: HttpClient,private service:NewsApiService
  // this.gridOptions = {
  //   context:{
  //     parentComponent:this
  //   }
  }



//   this.service.getAllUsers().subscribe((res:any) => {
//     this.rowData = res.data;
//     console.log('rowdata >>>',this.rowData)
//   });
// }

// onGridReady(params:any){
//   console.log(params);
//   this.gridApi = params.api;
//   this.columnApi= params.columnApi;
// }

// getSelectedRows(): void {
//        const selectedNodes = this.agGrid.api.getSelectedNodes();
//        const selectedData = selectedNodes.map(node => node.data);
//        const selectedDataStringPresentation = selectedData.map(node => `${node.first_name} ${node.last_name}`).join(', ');
//        alert(`Selected nodes: ${selectedDataStringPresentation}`);
//     }

  ngOnInit(): void {
  }



  
  // updateAllRows
  // updateAllRows(){
  //   this.http.get('../assets/data.json').subscribe((data)=>{
  //     this.gridApi.setRowData([]);
  //     let newData = data;
  //     this.gridApi.updateRowData({add:newData});
  //   })
  // }

  // updateSingleRow
  // updateSingleRow(){
  //   const rowData = this.gridApi.getRowNode(0);
  //   rowData.setData({
  //     "first_name":"jabid","last_name":"khan","username":"jabid123","password":"jabid@!123","phone":"11122334455"
  //   }
  //   )
  // }
  // updateSingleCell
  // updateSingleCell(){
  //   const rowData = this.gridApi.getRowNode(0);
  //   rowData.setDataValue("first_name","CHOTU");
  // }
  // clearRowsData?
  // clearRowsData(){
  //   this.gridApi.setRowData([]);
  // }

  // stopEditing
  

}
