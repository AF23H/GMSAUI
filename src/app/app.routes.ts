import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'',component:AboutComponent},
    {path:'',component:ServicesComponent},
    {path:'',component:TeamComponent},
    {path:'',component:ContactComponent},
    {path:'',component:LoginComponent},
    {path:'**',redirectTo:'HomeComponent'}
];
