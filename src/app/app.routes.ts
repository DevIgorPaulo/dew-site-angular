import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SobreHtmlComponent } from './pages/sobre-html/sobre-html';
import { SobreCssComponent } from './pages/sobre-css/sobre-css';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre-html', component: SobreHtmlComponent },
  { path: 'sobre-css', component: SobreCssComponent },
  { path: '**', redirectTo: 'home' }
];
