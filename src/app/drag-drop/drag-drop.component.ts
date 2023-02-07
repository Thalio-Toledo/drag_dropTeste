import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
  list1: string[] = ['tsk1', 'tsk2']
  list2: string[] = ['toDo1', 'toDo2']


  dragStart(listaAntiga: string[], card: string) {
    console.log(listaAntiga)
    console.log(card)
    return listaAntiga
  }

  
  dragOver(listaNova:string[]) {
    console.log(listaNova)
    return listaNova
  }

  dragEnd(listaAntiga:string[],listaNova:string[],card:string) {
    // console.log('parando...')
    // console.log(card)
    listaAntiga.splice(listaAntiga.indexOf(card),1)
    listaNova.push(card)

    // this.list2.splice(this.list2.indexOf(card), 1)
    // //list.splice(list.indexOf('foo'), 1);
    // this.list1.push(card)
  }
}
