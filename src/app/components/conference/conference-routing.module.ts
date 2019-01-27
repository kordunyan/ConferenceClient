import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferenceRootComponent } from './conference-root/conference-root.component';
import { ConferenceListComponent } from './conference-list/conference-list.component';

const routes: Routes = [
  {
    path: 'conference',
    component: ConferenceRootComponent,
    children: [
      {
        path: '',
        component: ConferenceListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferenceRoutingModule { }
