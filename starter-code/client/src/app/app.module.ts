import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { ApiConnectService } from './api-connect.service';
import { RouterModule, Routes } from '@angular/router';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

const routes: Routes = [
  { path: ':id', component: SingleEntryComponent },
  { path: '', component: EntryListComponent,
    children: [ { path: '', component: EntryFormComponent } ] }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiConnectService],
  bootstrap: [AppComponent]
})

export class AppModule { }

