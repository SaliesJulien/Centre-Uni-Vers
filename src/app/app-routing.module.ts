import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConferencesComponent } from './conferences/conferences.component';
import { ContactComponent } from './contact/contact.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from "./location/location.component";
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'acceuil', component: HomeComponent },
  { path: 'equipe', component: DoctorsComponent },
  { path: 'conferences', component: ConferencesComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'location', component: LocationComponent },
  { path: '**', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
