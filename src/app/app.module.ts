import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactFormComponent } from './components/react-form/react-form.component';
import { TDFormComponent } from './components/td-form/td-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Route[] = [
  {
    path: '',
    component: TDFormComponent,
  },
  {
    path: 'reactForm',
    component: ReactFormComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ReactFormComponent,
    TDFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
