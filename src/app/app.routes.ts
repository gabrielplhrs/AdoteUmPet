import { Routes } from '@angular/router';
import { SearchscreenComponent } from './screens/searchscreen/searchscreen.component';
import { AbrigoScreenComponent } from './screens/abrigo-screen/abrigo-screen.component';
import { AnimalProfileComponent } from './screens/animal-profile/animal-profile.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { ResultsScreenComponent } from './screens/results-screen/results-screen.component';

export const routes: Routes = [
    { path: 'buscar', component: SearchscreenComponent },
    { path: 'login', component: LoginScreenComponent },
    { path: 'animal', component: AnimalProfileComponent },
    { path: 'abrigo', component: AbrigoScreenComponent },
    { path: 'resultado', component: ResultsScreenComponent },
    { path: '', redirectTo: '/buscar', pathMatch: 'full' },
];
