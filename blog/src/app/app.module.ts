import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './app.routing';
import { ScrollSpyDirective } from '../shared/scroll.directive';
import { HomeComponent } from './content/home/home.component';
import { SkillsComponent } from './content/skills/skills.component';
import { WorkComponent } from './content/work/work.component';
import { BlogComponent } from './content/blog/blog.component';
import { ContactComponent } from './content/contact/contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ScrollSpyDirective,
    HomeComponent,
    SkillsComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
