import { Routes } from '@angular/router';
import { SearchscreenComponent } from './screens/searchscreen/searchscreen.component';
import { AbrigoScreenComponent } from './screens/abrigo-screen/abrigo-screen.component';
import { AnimalProfileComponent } from './screens/animal-profile/animal-profile.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { ResultsScreenComponent } from './screens/results-screen/results-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';
import { AnimalCreateScreenComponent } from './screens/animal-create-screen/animal-create-screen.component';

export const routes: Routes = [
    { path: 'buscar', component: SearchscreenComponent },
    { path: 'login', component: LoginScreenComponent },
    { path: 'registrar', component: RegisterScreenComponent },
    { path: 'animal/:id', component: AnimalProfileComponent },
    { path: 'abrigo', component: AbrigoScreenComponent },
    { path: 'resultado', component: ResultsScreenComponent },
    { path: 'animal-cadastro', component: AnimalCreateScreenComponent },
    { path: '', redirectTo: '/buscar', pathMatch: 'full' },
];
