import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { MaterialModule } from './material.module';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HackernewComponent } from './components/hackernew/hackernew.component';

// Services
import { HackernewService } from './services/hackernew.service';

@NgModule({
  declarations: [
    AppComponent,
    HackernewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MomentModule,
    MaterialModule
  ],
  providers: [
    HackernewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
