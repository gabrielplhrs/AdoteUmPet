import { Routes } from '@angular/router';
import { SearchscreenComponent } from './screens/searchscreen/searchscreen.component';
import { AbrigoScreenComponent } from './screens/abrigo-screen/abrigo-screen.component';
import { AnimalProfileComponent } from './screens/animal-profile/animal-profile.component';

export const routes: Routes = [
    { path: 'buscar', component: SearchscreenComponent },
    // { path: 'abrigo', component: AbrigoScreenComponent },
    { path: 'animal', component: AnimalProfileComponent },
    { path: '', redirectTo: '/buscar', pathMatch: 'full' },
];
