import { Injectable } from '@angular/core';

@Injectable()
export class GustavoTasksServiceService {
  list = [];

  constructor() {}

  salvar() {
    localStorage.setItem('lista', JSON.stringify(this.list));
  }

  add(valor: string) {
    this.list.push(valor);
    this.salvar();
  }

  del(id: number) {
    this.list.splice(id, 1);
    this.salvar();
  }

  show() {
    return JSON.parse(localStorage.getItem('lista'));
  }

  countTarefas() {
    return JSON.parse(localStorage.getItem('lista')).length;
  }
}
