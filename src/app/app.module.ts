import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AppComponent } from './app.component';

import { AuthInterceptor } from './Services/auth.interceptor';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    ShoppingListModule,
    StoreModule.forRoot({ shoppingList: shoppingListReducer }),
    CoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
