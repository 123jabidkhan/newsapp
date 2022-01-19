import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-apis/news-api.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  allInNewsHeadLines:any=[];
  constructor(private newsApiService:NewsApiService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
   
    this.newsApiService.getAllIndiaHeadLines().subscribe((response:any) => {
      console.log("response >>",response.articles);
      this.allInNewsHeadLines = response.articles;
    });
      
  }
      
  

}
