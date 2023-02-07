import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
  list1:string[]= ['tsk1', 'tsk2']
  list2:string[]= ['toDo1', 'toDo2']


  dragCard(lista:string[], card:string){
    console.log('começando...')
    console.log(lista)
    console.log(card)
  }

  dragEndCard(card:string){
    console.log('parando...')
    console.log(card)
    this.list2.splice(this.list2.indexOf(card),1)
    //list.splice(list.indexOf('foo'), 1);
    this.list1.push(card)
  }

  dragOverDrop(event:object){
    console.log('Dropable over...')
    console.log(event)
  }
}
