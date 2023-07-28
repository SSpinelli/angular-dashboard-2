import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'


import { PizzaGraphCardComponent } from './components/pizza-graph-card/pizza-graph-card.component';
import { LineGraphCardComponent } from './components/line-graph-card/line-graph-card.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ColumnGraphCardComponent } from './components/column-graph-card/column-graph-card.component';
import { CryptoCardComponent } from './components/crypto-card/crypto-card.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PizzaGraphCardComponent,
    LineGraphCardComponent,
    ActivityComponent,
    ColumnGraphCardComponent,
    CryptoCardComponent,
    HeaderComponent,
    DashboardComponent,
    NotImplementedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
