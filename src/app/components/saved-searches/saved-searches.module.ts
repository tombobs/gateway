import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SavedSearchesComponent} from "./saved-searches.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SavedSearchesComponent],
  exports: [SavedSearchesComponent]
})
export class SavedSearchesModule { }
