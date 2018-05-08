import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SchemaComponent } from './schema/schema.component';
import { FillOutSchemaComponent } from './schema/fill-out-schema/fill-out-schema.component';
import { PreviousSchemaComponent } from './schema/previous-schema/previous-schema.component';
import { FillOutReflectionComponent } from './reflection/fill-out-reflection/fill-out-reflection.component';
import { NotesComponent } from './reflection/notes/notes.component';
import { ReflectionComponent } from './reflection/reflection.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './profile/learning/learning.component';
import { InternshipComponent } from './profile/internship/internship.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { HelpComponent } from './profile/help/help.component';
import { PreviousReflectionComponent } from './reflection/previous-reflection/previous-reflection.component';

const routes: Routes = [
  { path: "", component: CalendarComponent },
  { path: "erfaringsskema", component: SchemaComponent },
  { path: "udfyld-erfaringsskema", component: FillOutSchemaComponent },
  { path: "tidligere-erfaringsskema", component: PreviousSchemaComponent },
  { path: "refleksionsark", component: FillOutReflectionComponent },
  { path: "tidligere-refleksionsark", component: PreviousReflectionComponent },
  { path: "noter", component: NotesComponent },
  { path: "laeringsstatistik", component: LearningComponent },
  { path: "praktik", component: InternshipComponent },
  { path: "indstillinger", component: SettingsComponent },
  { path: "hjaelp", component: HelpComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MenuComponent,
    SchemaComponent,
    FillOutSchemaComponent,
    PreviousSchemaComponent,
    FillOutReflectionComponent,
    NotesComponent,
    ReflectionComponent,
    ProfileComponent,
    LearningComponent,
    InternshipComponent,
    SettingsComponent,
    HelpComponent,
    PreviousReflectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
