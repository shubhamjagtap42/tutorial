import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Ex4Component } from './ex4/ex4.component';
import { DatabindComponent } from './databind/databind.component';
import { DropdownModule } from 'primeng/dropdown';
import { Exercise2Component } from './exercise2/exercise2.component';
import { ImageModule } from 'primeng/image';
import { ExpenseManagerComponent } from './expense-manager/expense-manager.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EventComponent } from './event/event.component';
import { TemplatesComponent } from './templates/templates.component';
import { Tempex1Component } from './templates/tempex1/tempex1.component';
import { Tempex2Component } from './templates/tempex2/tempex2.component';
import { Tempex3Component } from './templates/tempex3/tempex3.component';
import { ChangetxtDirective } from './changetxt.directive';
import { DirectivesComponent } from './directives/directives.component';
import { Dex1Component } from './directives/dex1/dex1.component';
import { Dex2Component } from './directives/dex2/dex2.component';
import { Dex3Component } from './directives/dex3/dex3.component';
import { PipesComponent } from './pipes/pipes.component';
import { SqrtPipe } from './sqrt.pipe';
import { PowerPipe } from './pipes/power.pipe';
import { UserFullNamePipe } from './pipes/user-full-name.pipe';
import { ReversestrPipe } from './pipes/reversestr.pipe';
import { AgePipe } from './pipes/age.pipe';
import { TempconverterPipe } from './tempconverter.pipe';
import { CapitalfirstPipe } from './capitalfirst.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './login-page/home/home.component';
import { AboutComponent } from './login-page/about/about.component';
import { ToolbarModule } from 'primeng/toolbar';
import { NavbarComponent } from './login-page/navbar/navbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ViewComponent } from './login-page/about/view/view.component';
import { NotfoundComponent } from './login-page/notfound/notfound.component';
import { OuremployeeComponent } from './login-page/about/ouremployee/ouremployee.component';
import { OurlistComponent } from './login-page/about/ourlist/ourlist.component';
import { GamesComponent } from './Games/games/games.component';
import { GamelistComponent } from './Games/gamelist/gamelist.component';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from "@angular/forms";
import { SamplecardComponent } from './samplecard/samplecard.component';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import { ITUNEAPPComponent } from './ituneapp/ituneapp.component';
import { ItunehomeComponent } from './ituneapp/itunehome/itunehome.component';















@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Ex4Component,
    DatabindComponent,
    Exercise2Component,
    ExpenseManagerComponent,
    EventComponent,
    TemplatesComponent,
    Tempex1Component,
    Tempex2Component,
    Tempex3Component,
    ChangetxtDirective,
    DirectivesComponent,
    Dex1Component,
    Dex2Component,
    Dex3Component,
    PipesComponent,
    SqrtPipe,
    PowerPipe,
    UserFullNamePipe,
    ReversestrPipe,
    AgePipe,
    TempconverterPipe,
    CapitalfirstPipe,
    LoginPageComponent,
    HomeComponent,
    AboutComponent,
    RoutingComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    ImageModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    BrowserAnimationsModule,
    TableModule,
    RatingModule,
    FormsModule,
    CardModule,
    CalendarModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
