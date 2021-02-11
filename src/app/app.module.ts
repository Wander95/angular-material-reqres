import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClientComponent } from './components/client/client.component';
import { FormControl, FormsModule } from '@angular/forms';
import { ClientService } from './service/client.service';
import { HttpClientModule } from '@angular/common/http';

import { MatSliderModule } from '@angular/material/slider';
import { MaterialModules } from './material.module';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { ClientEditFormComponent } from './components/client-edit-form/client-edit-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientTableComponent,
    ClientEditFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    ServiceWorkerModule.register(
      'ngsw-worker.js',
      { enabled: environment.production }
    )
  ],
  providers: [ ClientService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
