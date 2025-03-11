import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'programs',
        component: ProgramsComponent,
        title: 'ELP Program Planning'
    }
];

export default routeConfig;
