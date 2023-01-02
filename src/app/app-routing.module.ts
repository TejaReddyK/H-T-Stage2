import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-details/animal-details.component';

//created  a Routes array
//Routes
//[ { path , component},
//{  path , component , } ]
/* const routes: Routes = [
  {
    path: '',
    component: TrusteeListComponent
  },
  {
    path: 'trustees/:id/view',
    component: ViewTrusteeComponent
  },
  {
    path: 'trustees/:id/edit',
    component: EditTrusteeComponent
  },
  {
    path: 'trustees/new',
    component: CreateTrusteeComponent
  },
  {
    path: '**',
    component: TrusteeListComponent
  }
]; *//*
  {path:'events/:id',component:EventDetailComponent},
  {path:'addProduct',component:ProductAddComponent},
  {path:'',pathMatch:'full' ,component:AppComponent}]
*/
const routes:Routes=[

  {

path:'',component:HomeComponent,pathMatch:'full',

},
{
path:'student',component:StudentAddComponent
},
{path:'event',component:EventDetailComponent},
/* {
  path:'animal',component:AnimalListComponent
}, */
{path:'animal',component:AnimalListComponent,
children:[
  {
    path:'detail/:id',component:AnimalDetailComponent},
  
]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }