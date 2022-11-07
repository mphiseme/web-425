/**
 * Title: app.component.ts
 * Author: Manel Phiseme
 * Date: 3 November 2022
 * Description: Secure profile app
 */
import { Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { HomeComponent } from "./home/home.component";

export const AppRoutes: Routes = [
  {
    path:'',
    component: SignInComponent
  },
  {
    path: '',
    component: HomeComponent
  }

]
