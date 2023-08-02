import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoArray:string[]=[];
  @ViewChild('todo') todo!:ElementRef
  todoData:any;
  editTodo:boolean = false;
  editingIndex!:number;
  todoEditInput = new FormControl();
  ngOnInit(){}

  onAddTodo(value:string){
    this.todoData = value;
  }

  onRemoveTodo(item:number){
    this.todoArray.splice(item,1)
  }

  onEditTodos(index:number){
    this.editTodo = true;
    this.editingIndex = index
    this.todoEditInput.setValue(this.todoArray[index])
  }

  onSaveEdit()  {
    this.editTodo = false
    this.todoArray[this.editingIndex] = this.todoEditInput.value
  }

  onSubmitTodo() {
    this.todoArray.push(this.todoData);
    this.todo.nativeElement.value = "";
  }

  completedTodo:string[]=[];
  checkedTasks:any;
  onMarkTask(e:any,todoData:string,index:number){
    console.log(todoData);

    this.checkedTasks = index
    if(e.target.checked){
      this.completedTodo = [...this.completedTodo,todoData];
      setTimeout(()=>this.todoArray.splice(this.todoArray.findIndex(f => f === todoData),1),1000);
      console.log(this.todoArray);

    }
  }
}
