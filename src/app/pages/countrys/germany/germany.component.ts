import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-apis/news-api.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-germany',
  templateUrl: './germany.component.html',
  styleUrls: ['./germany.component.scss']
})
export class GermanyComponent implements OnInit {

  
  allDeNewsHeadLines:any=[];
  constructor(private newsApiService:NewsApiService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
   
    this.newsApiService.getALLDeHeadlines().subscribe((response:any) => {
      console.log("response >>",response.articles);
      this.allDeNewsHeadLines = response.articles;
    });
      
  }
      
  

}
