/**
 * Title: app-routing.module.ts
 * Author: Manel Phiseme
 * Date: 6 November 2022
 * Description: Enhanced-composer.app
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { ComposerListComponent } from './composer-list/composer-list.component';

const routes: Routes = [
  {
    path: "",
    component: ComposerListComponent
  },
  {
    path: "composer-list",
    component: ComposerListComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "composer-details",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
