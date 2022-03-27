import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfitsComponent } from './profits/profits.component';
import { EarningsComponent } from './earnings/earnings.component';
import { RevenueComponent } from './revenue/revenue.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { StatChipComponent } from './stat-chip/stat-chip.component';
import { NgChartsModule } from 'ng2-charts';
import { BudgetComponent } from './budget/budget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppbarComponent } from './appbar/appbar.component';
import { UserChipComponent } from './user-chip/user-chip.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    OrdersComponent,
    ProfitsComponent,
    EarningsComponent,
    RevenueComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    StatChipComponent,
    BudgetComponent,
    AppbarComponent,
    UserChipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
