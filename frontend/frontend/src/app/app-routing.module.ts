import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VoiceTestComponent } from './voice-test/voice-test.component';

const routes: Routes = [
  {path: 'voicetest', component:VoiceTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
