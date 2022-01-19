import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-apis/news-api.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {

  allTechNews:any=[];
  constructor(private newsApiService:NewsApiService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {

 /** spinner starts on init */
 this.spinner.show();

 setTimeout(() => {
   /** spinner ends after 5 seconds */
   this.spinner.hide();
 }, 2000);

    this.newsApiService.getAllTechNews().subscribe((response:any) => {
      console.log("getAllTechNews >>",response.articles);
      this.allTechNews = response.articles;
    });
  }
      
  

}
