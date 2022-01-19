import { Component, OnInit } from '@angular/core';
import { CategorysService } from 'src/app/news-apis/categorys/categorys.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  
  indiaEntertainmentNews:any=[];
  constructor(private categoryServices:CategorysService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
   
    this.categoryServices.getIndiaEntertainment().subscribe((response:any) => {
      console.log("indiaEntertainmentNews >>",response.articles);
      this.indiaEntertainmentNews = response.articles;
    });
      
  }
      
  

}
