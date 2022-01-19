import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-apis/news-api.service';
import { LoadingService } from 'src/app/news-apis/loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-all-channels',
  templateUrl: './all-channels.component.html',
  styleUrls: ['./all-channels.component.scss']
})
export class AllChannelsComponent implements OnInit {

  allChannels:any[]=[];
  constructor(private newsApiService:NewsApiService,public spinner:NgxSpinnerService) { }

  panelOpenState = false;
  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
   
    this.newsApiService.getAllNewsChannels().subscribe((response:any) => {
      console.log("allChannels >>",response);
      this.allChannels = response.sources;
    });
      
  }
      
  

}
