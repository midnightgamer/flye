import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopicModule} from "./component/topic/topic.module";
import {
  UserProfileComponent
} from './component/user-profile/user-profile.component';
import {LandingComponent} from './pages/landing/landing.component';
import {UserComponent} from "./pages/user/user.component";
import {HttpClientModule} from "@angular/common/http";
import {RepoCardModule} from "./component/repo-card/repo-card.module";
import {NgxPaginationModule} from "ngx-pagination";
import { LoaderComponent } from './component/loader/loader.component';
import { UserSearchComponent } from './component/user-search/user-search.component';
import {FormsModule} from "@angular/forms";
import { PaginationComponent } from './component/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserComponent,
    LandingComponent,
    LoaderComponent,
    UserSearchComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TopicModule,
    RepoCardModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
