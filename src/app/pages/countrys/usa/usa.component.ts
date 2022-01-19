import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-apis/news-api.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.scss']
})
export class UsaComponent implements OnInit {

  
  allUsNewsHeadLines:any=[];
  constructor(private newsApiService:NewsApiService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
   
    this.newsApiService.getALLUsHeadlines().subscribe((response:any) => {
      console.log("response >>",response.articles);
      this.allUsNewsHeadLines = response.articles;
    });
      
  }
      
  

}
