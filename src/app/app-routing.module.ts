import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'log',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'footer',component:FooterComponent},
  {path:'dash',component:DashboardComponent},
  {path:'blog',component:BlogComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
