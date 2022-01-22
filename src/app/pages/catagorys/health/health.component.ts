import { Component, OnInit } from '@angular/core';
import { CategorysService } from 'src/app/news-apis/categorys/categorys.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  
  indiaHealthNews:any=[];
  constructor(private categoryServices:CategorysService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
   
    this.categoryServices.getIndiaHealth().subscribe((response:any) => {
      console.log("indiaHealthNews >>",response.articles);
      this.indiaHealthNews = response.articles;
    });
      
  }
      
  

}
