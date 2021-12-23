import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ActivityService } from './activity.service';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityThumbnailComponent } from './activity-thumbnail/activity-thumbnail.component';


import { RouterModule, Routes } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

const appRoutes: Routes = [ 
  { path: 'activity', component: ActivityListComponent },
  { path: '', redirectTo: 'activity', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
