import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { ElasticHideDirective } from './directives/elastic-hide.directive';
import { AppearDirective } from './directives/appear.directive';
import { AboutMeComponent } from './componenets/about-me/about-me.component';
import { ExperienceComponent } from './componenets/experience/experience.component';
import { ProjectsComponent } from './componenets/projects/projects.component';
import { QuickLinksComponent } from './componenets/quick-links/quick-links.component';
import { SkillsComponent } from './componenets/skills/skills.component';
import { SplashComponent } from './componenets/splash/splash.component';
import { ProjectCardComponent } from './componenets/project-card/project-card.component';
import { EducationCardComponent } from './componenets/education-card/education-card.component';
import { SkillCardComponent } from './componenets/skill-card/skill-card.component';
import { ToggleComponent } from './componenets/toggle/toggle.component';
import { ImgDialogComponent } from './componenets/img-dialog/img-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElasticHideDirective,
    AppearDirective,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    QuickLinksComponent,
    SkillsComponent,
    SplashComponent,
    ProjectCardComponent,
    EducationCardComponent,
    SkillCardComponent,
    ToggleComponent,
    ImgDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
