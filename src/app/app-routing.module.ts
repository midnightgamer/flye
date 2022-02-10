import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./pages/user/user.component";
import {LandingComponent} from "./pages/landing/landing.component";

const routes: Routes = [{
  path: '',
  component: LandingComponent
}, {
  path: 'user/:id',
  component: UserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
