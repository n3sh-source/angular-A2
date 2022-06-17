import { Component, OnInit } from '@angular/core';
import { GustavoTasksServiceService } from '../gustavo-tasks-service.service';

@Component({
  selector: 'app-gustavo-tasks-component',
  templateUrl: './gustavo-tasks-component.component.html',
  styleUrls: ['./gustavo-tasks-component.component.css'],
})
export class GustavoTasksComponentComponent implements OnInit {
  constructor(public tarefa: GustavoTasksServiceService) {}

  ngOnInit() {}
}
