import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRouting } from './form.routing';
import { FormPage } from './form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRouting
  ],
  declarations: [
    FormPage
  ]
})
export class FormModule { }
