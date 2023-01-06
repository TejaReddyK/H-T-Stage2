import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { AnimalsListComponent } from './animal/animal-list/animal-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AuthGuard } from './user/auth-guard.service';
import { LoginComponent } from './user/login.component';
import { ProductAddComponent } from './products/product-list/product-add.component';
import { ProductsListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShellComponent } from './home/shell.component';
import { BookDataComponent } from './book/book.component';
import { AnimalAddComponent } from './animal/animal-list/animal-add.component';

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
/* const routes:Routes=[

  {

path:'',component:HomeComponent,pathMatch:'full',

},
{
path:'student',component:StudentAddComponent
},
{path:'event',component:EventDetailComponent},
/* {
  path:'animal',component:AnimalListComponent
}, 
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
export class AppRoutingModule { } */
const routes:Routes=[

  {path:'',component:HomeComponent,pathMatch:'full',},
  
 
  
  {path:'book',component:BookDataComponent},
  
  {path:'',component:ShellComponent,
  
    children:[{path:'welcome', component:WelcomeComponent},
  
    {
      path:'products',
      component:ProductsListComponent,
      canActivate:[AuthGuard],
      loadChildren:()=>import('../app/product/product.module').then(m=>m.ProductModule)
     },
  
    {path:'',redirectTo:'welcome',pathMatch:'full'},
  
    {path:'login',component:LoginComponent}
  
  ]},
  
  /*{path:'products',component:ProductsListComponent,
  
   children:[
  
    {path:'addProduct',component:ProductAddComponent}
  
  ]}, */
  
  {path:'event',component:EventDetailComponent},

  {path:'',component:ShellComponent,
  
    children:[{path:'welcome', component:WelcomeComponent},
  
    {
  
      path:'animals',
  
      component:AnimalsListComponent,
  
      canActivate:[AuthGuard],
  
      children:[{path:'addAnimal',component:AnimalAddComponent}]
  
    },
  
    {path:'',redirectTo:'welcome',pathMatch:'full'},
  
    {path:'login',component:LoginComponent},
    {
      path:'todo',
      loadChildren:()=>import('./todo/todo.module').then((m)=>m.TodoModule),
      },
  
  ]},
  
 
  
  ]
  
  @NgModule({
  
    imports: [RouterModule.forRoot(routes)],
  
    exports: [RouterModule]
  
  })
  
  export class AppRoutingModule { }