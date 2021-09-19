import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReviewComponent } from './components/review/review.component';
import { TheaterComponent } from './components/theater/theater.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'theater', component: TheaterComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'movie-detail/:movieId', component: MovieDetailComponent },
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      { path: '', component: TemplateDrivenComponent },
      { path: 'reactive', component: ReactiveComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
