import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {OverallInformationComponent} from "./overall-information/overall-information.component";
import {NotFoundComponent} from "src/app/not-found/not-found.component";
import {MoviesComponent} from "src/app/information/movies/movies.component";
import {PeopleComponent} from "src/app/information/people/people.component";
import {MoviesOverviewComponent} from "src/app/information/movies/movie-overview/movies-overview.component";
import {PeopleOverviewComponent} from "src/app/information/people/people-overview/people-overview.component";
import { AccountComponent } from "src/app/account/account.component";

const routes: Routes = [
  {
    path: 'overall-information',
    title: 'Overall Information',
    component: OverallInformationComponent,
  },
  {
    path: 'information',
    children: [
      {
        path:'movies',
        title: 'Information Movies',
        component: MoviesComponent,
      },
      {
        path:'movies/:movieId',
        title: 'Movie Overview',
        component: MoviesOverviewComponent,
      },
      {
        path: 'people',
        title: 'Information People',
        component: PeopleComponent,
      },
      {
        path: 'people/:peopleType/:personId',
        title: 'Person Overview',
        component: PeopleOverviewComponent,
      }

    ]
  },
  {
    //type - register/login
    path: 'account/:type',
    title: 'Account',
    component: AccountComponent,
  },
  { path: '',
    redirectTo: '/overall-information',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: '404 Page not found',
    component: NotFoundComponent
  }
];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
