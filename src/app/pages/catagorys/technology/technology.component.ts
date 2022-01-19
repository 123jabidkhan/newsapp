import { Component, OnInit } from '@angular/core';
import { CategorysService } from 'src/app/news-apis/categorys/categorys.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  
  indiaTechnologyNews:any=[];
  constructor(private categoryServices:CategorysService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
   
    this.categoryServices.getIndiaTechnology().subscribe((response:any) => {
      console.log("indiaTechnologyNews >>",response.articles);
      this.indiaTechnologyNews = response.articles;
    });
      
  }
      
  

}
