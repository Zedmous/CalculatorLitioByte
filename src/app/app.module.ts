import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { RightComponent } from './pages/right/right.component';
import { LeftComponent } from './pages/left/left.component';
import { InputsComponent } from './pages/inputs/inputs.component';


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    RightComponent,
    LeftComponent,
    InputsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
