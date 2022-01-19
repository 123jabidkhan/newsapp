import { Component, OnInit } from '@angular/core';
import { CategorysService } from 'src/app/news-apis/categorys/categorys.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  
  indiaScienceNews:any=[];
  constructor(private categoryServices:CategorysService,public spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
   
    this.categoryServices.getIndiaScience().subscribe((response:any) => {
      console.log("indiaScienceNews >>",response.articles);
      this.indiaScienceNews = response.articles;
    });
      
  }
      
  

}
