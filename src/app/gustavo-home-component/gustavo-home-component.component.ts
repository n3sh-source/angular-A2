import { Component, OnInit } from '@angular/core';
import { GustavoTasksComponentComponent } from '../gustavo-tasks-component/gustavo-tasks-component.component';
import { GustavoTasksServiceService } from '../gustavo-tasks-service.service';

@Component({
  selector: 'app-gustavo-home-component',
  templateUrl: './gustavo-home-component.component.html',
  styleUrls: ['./gustavo-home-component.component.css'],
})
export class GustavoHomeComponentComponent implements OnInit {
  constructor(public tarefa: GustavoTasksServiceService) {}

  ngOnInit() {}
}
