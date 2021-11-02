import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { DashboardRoutingModule } from './dashboard.routing';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
