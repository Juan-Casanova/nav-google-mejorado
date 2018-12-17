import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import { AgmCoreModule} from '@agm/core';
import { AgmDirectionModule} from 'agm-direction'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDUjRwYOxuocDRjXixpFbtl8jujLK2NSTk'
    }),
    AgmDirectionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }