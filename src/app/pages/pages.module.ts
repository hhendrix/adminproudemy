import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// Graficos
import { ChartsModule } from 'ng2-charts';


// Modulos
import { SharedModule } from '../shared/shared.module';
// Routes
import { PAGES_ROUTES } from './pages.routes';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccouSettingComponent } from './accou-setting/accou-setting.component';



@NgModule({
  declarations: [DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccouSettingComponent],
  exports: [DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent],
  imports : [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModule {}
