import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {path: 'post', component: SinglePostComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  { path: '', component: HomeComponent },
  {path:'destinations', component:DestinationsComponent},
  {path:'article/:id', component:ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
