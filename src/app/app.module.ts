import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { NameComponent } from './name/name.component';
import { SearchBar1Component } from './search-bar1/search-bar1.component';
import { PageList1Component } from './page-list1/page-list1.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PageListComponent,
    NameComponent,
    SearchBar1Component,
    PageList1Component,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
