import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllChannelsComponent } from './all-channels/all-channels.component';
import { BusinessComponent } from './catagorys/business/business.component';
import { EntertainmentComponent } from './catagorys/entertainment/entertainment.component';
import { HealthComponent } from './catagorys/health/health.component';
import { ScienceComponent } from './catagorys/science/science.component';
import { SportsComponent } from './catagorys/sports/sports.component';
import { TechnologyComponent } from './catagorys/technology/technology.component';
import { GermanyComponent } from './countrys/germany/germany.component';
import { NewzlandComponent } from './countrys/newzland/newzland.component';
import { UsaComponent } from './countrys/usa/usa.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent},
  // countrys
  {path:'german',component:GermanyComponent},
  {path:'newzland',component:NewzlandComponent},
  {path:'usa',component:UsaComponent},

  // categorys
  {path:'technology',component:TechnologyComponent},
  {path:'sports',component:SportsComponent},
  {path:'health',component:HealthComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'business',component:BusinessComponent},
  {path:'science',component:ScienceComponent},



  {path:'details',component:DetailsComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'all-channels',component:AllChannelsComponent},

  // if path not found redirect to home page
  {path:'**',pathMatch:'full',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
