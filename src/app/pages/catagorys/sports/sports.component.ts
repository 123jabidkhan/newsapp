import { Component, OnInit } from '@angular/core';
import { CategorysService } from 'src/app/news-apis/categorys/categorys.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  
  indiaSportsNews:any=[];
  constructor(private categoryServices:CategorysService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
   
    this.categoryServices.getIndiaSports().subscribe((response:any) => {
      console.log("indiaSportsNews >>",response.articles);
      this.indiaSportsNews = response.articles;
    });
      
  }
      
  

}
