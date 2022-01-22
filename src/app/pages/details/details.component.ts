import { Component, OnInit ,ViewChild} from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { NewsApiService } from 'src/app/news-apis/news-api.service';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @ViewChild('agGrid',{static:false}) agGrid!: AgGridAngular;

  
  columnDefs: ColDef[] = [
    { field: 'first_name',sortable:true , filter: true,  checkboxSelection:true},
    { field: 'last_name',sortable:true , filter: true},
    { field: 'username',sortable:true, filter: true},
    { field: 'password',sortable:true , filter: true},
    { field: 'phone',sortable:true , filter: true},
];

// rowData = [
//   { make: 'Toyota', model: 'Celica', price: 35000 },
//   { make: 'Ford', model: 'Mondeo', price: 32000 },
//   { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];

rowData:any[]=[];

constructor(private http: HttpClient,private service:NewsApiService) {
  
  this.service.getAllUsers().subscribe((res:any) => {
    this.rowData = res.data;
    console.log('rowdata >>>',this.rowData)
  });
}

getSelectedRows(): void {
       const selectedNodes = this.agGrid.api.getSelectedNodes();
       const selectedData = selectedNodes.map(node => node.data);
       const selectedDataStringPresentation = selectedData.map(node => `${node.first_name} ${node.last_name}`).join(', ');
       alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }

  ngOnInit(): void {
  }

}
