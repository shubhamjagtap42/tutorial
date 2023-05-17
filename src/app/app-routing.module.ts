import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './login-page/home/home.component';
import { AboutComponent } from './login-page/about/about.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavbarComponent } from './login-page/navbar/navbar.component';
import { ViewComponent } from './login-page/about/view/view.component';
import { NotfoundComponent } from './login-page/notfound/notfound.component';
import { OuremployeeComponent } from './login-page/about/ouremployee/ouremployee.component';
import { OurlistComponent } from './login-page/about/ourlist/ourlist.component';
import { GamesComponent } from './Games/games/games.component';
import { GamelistComponent } from './Games/gamelist/gamelist.component';
import { SamplecardComponent } from './samplecard/samplecard.component';
import { ITUNEAPPComponent } from './ituneapp/ituneapp.component';
import { ItunehomeComponent } from './ituneapp/itunehome/itunehome.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'about',
    children: [
      {
        path: '',
        component: AboutComponent,
      },
      {
        path: 'ouremployee',
        component: OuremployeeComponent,
      },
      {
        path: 'ourlist',
        component: OurlistComponent,
      },
    ],
  },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'view', component: ViewComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'games', component: GamesComponent },
  { path: 'gamelist', component: GamelistComponent },
  { path: 'ituneapp', component: ITUNEAPPComponent },
  { path: 'itunehome', component: ItunehomeComponent },
  { path: 'samplecard', component: SamplecardComponent },
  { path: '**', component: NotfoundComponent },
  // {path: '**', redirectTo: '/404'},
  // {path : "",pathMatch:'full' , component : NotfoundComponent},
  // {path: '/**', redirectTo:"" ['NotFound']}
  { path: '', pathMatch: 'full', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponent = [
  HomeComponent,
  AboutComponent,
  LoginPageComponent,
  NavbarComponent,
  ViewComponent,
  NotfoundComponent,
  OuremployeeComponent,
  OurlistComponent,
  GamesComponent,
  GamelistComponent,
  SamplecardComponent,
  ITUNEAPPComponent,
  ItunehomeComponent,
];
