import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LatestArticleComponent } from './components/latest-article/latest-article.component';
import { HomeComponent } from './components/home/home.component';
import { TipsComponent } from './components/tips/tips.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    SinglePostComponent,
    AboutComponent,
    ContactComponent,
    LatestArticleComponent,
    HomeComponent,
    TipsComponent,
    DestinationsComponent,
    CardImageComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
