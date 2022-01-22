import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NgxSpinnerModule } from "ngx-spinner";
import 'ag-grid-enterprise';

//news api services
import { NewsApiService } from '../news-apis/news-api.service';

// mat modules/
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { TechnewsComponent } from './technews/technews.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AllChannelsComponent } from './all-channels/all-channels.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { GermanyComponent } from './countrys/germany/germany.component';
import { NewzlandComponent } from './countrys/newzland/newzland.component';
import { UsaComponent } from './countrys/usa/usa.component';
import { BusinessComponent } from './catagorys/business/business.component';
import { EntertainmentComponent } from './catagorys/entertainment/entertainment.component';
import { HealthComponent } from './catagorys/health/health.component';
import { ScienceComponent } from './catagorys/science/science.component';
import { SportsComponent } from './catagorys/sports/sports.component';
import { TechnologyComponent } from './catagorys/technology/technology.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    TechnewsComponent,
    AllChannelsComponent,
    GermanyComponent,
    NewzlandComponent,
    UsaComponent,
    BusinessComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatButtonModule,
    AgGridModule.withComponents([]),
    
    // mat modules
    MatCardModule,
    MatExpansionModule
  ],
  providers: [NewsApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
