import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SelectComponent } from './select.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
      MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, SelectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
