import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { ElasticHideDirective } from './directives/elastic-hide.directive';
import { AppearDirective } from './directives/appear.directive';
import { AboutMeComponent } from './componenets/about-me/about-me.component';
import { EducationComponent } from './componenets/education/education.component';
import { ExperienceComponent } from './componenets/experience/experience.component';
import { ProjectsComponent } from './componenets/projects/projects.component';
import { QuickLinksComponent } from './componenets/quick-links/quick-links.component';
import { SkillsComponent } from './componenets/skills/skills.component';
import { SplashComponent } from './componenets/splash/splash.component';
import { ProjectCardComponent } from './componenets/project-card/project-card.component';
import { EducationCardComponent } from './componenets/education-card/education-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElasticHideDirective,
    AppearDirective,
    AboutMeComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    QuickLinksComponent,
    SkillsComponent,
    SplashComponent,
    ProjectCardComponent,
    EducationCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
