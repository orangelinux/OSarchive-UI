import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule,MatMenuModule } from '@angular/material';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'details',      component: DetailsComponent },
 // {
  //  path: 'heroes',
  //  component: HeroListComponent,
  //  data: { title: 'Heroes List' }
 // },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
 // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
