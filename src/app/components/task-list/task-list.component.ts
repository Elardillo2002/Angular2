    import { Component } from '@angular/core';
    import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

    @Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
    })


    export class TaskListComponent {
    // TODO: Reformular como lista de tareas
    task1: ITask = {
        title: "Task 1",
        description: "Description 1",
        completed: false,
        level: Levels.Info
        
    }

    task2: ITask = {
        title: "Task 2",
        description: "Description 2",
        completed: true,
        level: Levels.Urgent
        
    }

    deleteTask(task: ITask) {
        // TODO: Sustituir por un Splice para eliminar de la lista de tareas
        alert(`Se ha eliminado la tarea ${task.title}`);
    }
}
