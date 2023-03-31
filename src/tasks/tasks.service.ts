import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { Task, TaskStatus } from './tasks.entity';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'a task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const newTask = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(newTask);

    return newTask;
  }

  updateTask(id: string, updatedFields: UpdateTaskDto): Task | string {
    const task = this.getTaskById(id);

    if (task) {
      const newTask = Object.assign(task, updatedFields);
      this.tasks.map((task) => {
        if (task.id === id) {
          return newTask;
        } else {
          task;
        }
        return newTask;
      });
    } else {
      return 'The task does not exist!';
    }
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTask(id: string) {
    this.tasks.filter((task) => task.id !== id);
  }
}
