import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-apis/news-api.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-newzland',
  templateUrl: './newzland.component.html',
  styleUrls: ['./newzland.component.scss']
})
export class NewzlandComponent implements OnInit {

  
  allNzNewsHeadLines:any=[];
  constructor(private newsApiService:NewsApiService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
   
    this.newsApiService.getALLNzHeadlines().subscribe((response:any) => {
      console.log("response >>",response.articles);
      this.allNzNewsHeadLines = response.articles;
    });
      
  }
      
  

}
