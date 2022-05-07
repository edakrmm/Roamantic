import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoiceTestComponent } from './voice-test/voice-test.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { DownloadFileService } from './download-file.service';

@NgModule({
  declarations: [
    AppComponent,
    VoiceTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedService,DownloadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
