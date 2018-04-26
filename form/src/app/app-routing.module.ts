import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowEventComponent }   from './show-event/show-event.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { AddPlaceComponent }  from './add-place/add-place.component';
import { AddEventComponent }  from './add-event/add-event.component';
import { SearchPlaceComponent }   from './search-place/search-place.component';
import { RouteInfoComponent }  from './route-info/route-info.component';
import { RouteDetailComponent }  from './route-detail/route-detail.component';
import { LoginPageComponent }  from './login-page/login-page.component';
import { AdminMainComponent }  from './admin-main/admin-main.component';
import { AdminPlacesComponent }  from './admin-places/admin-places.component';
import { AdminEventsComponent }  from './admin-events/admin-events.component';
import { ProfileComponent }  from './profile/profile.component';
import { GiveFeedbackComponent }  from './give-feedback/give-feedback.component';

const routes: Routes = [
  { path: '', redirectTo: '/searchplace', pathMatch: 'full' },
  { path: 'events', component: ShowEventComponent },
  { path: 'addplace', component: AddPlaceComponent },
  { path: 'addevent', component: AddEventComponent },
  { path: 'detail/:id', component: PlaceDetailComponent },
  { path: 'searchplace', component: SearchPlaceComponent },
  { path: 'routeinfo', component: RouteInfoComponent },
  { path: 'routedetail/:id', component: RouteDetailComponent },
  { path: 'admin/main', component: AdminMainComponent },
  { path: 'admin/places', component: AdminPlacesComponent },
  { path: 'admin/events', component: AdminEventsComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'feedback/:id', component: GiveFeedbackComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}