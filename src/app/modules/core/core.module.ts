import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { FilterActvesPipe } from './filter-actves.pipe';

@NgModule({
  declarations: [
    LoadingComponent,
    PageNotFoundComponent,
    HighlightDirective,
    UnlessDirective,
    FilterActvesPipe
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports: [
    LoadingComponent,
    PageNotFoundComponent,
    HighlightDirective,
    UnlessDirective,
    FilterActvesPipe
  ]
})
export class CoreModule { }
