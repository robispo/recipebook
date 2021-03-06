import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  declarations: [HeaderComponent, HomeComponent, NotfoundComponent],
  providers: []
})
export class CoreModule {}
