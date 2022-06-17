import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GustavoHomeComponentComponent } from './gustavo-home-component/gustavo-home-component.component';
import { GustavoTasksComponentComponent } from './gustavo-tasks-component/gustavo-tasks-component.component';
import { RouterModule } from '@angular/router';
import { GustavoTasksServiceService } from './gustavo-tasks-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: GustavoHomeComponentComponent },
      { path: 'tasks', component: GustavoTasksComponentComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    GustavoHomeComponentComponent,
    GustavoTasksComponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [GustavoTasksServiceService],
})
export class AppModule {}
