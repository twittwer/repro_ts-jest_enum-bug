export enum TaskStatus {
  OPEN,
  DONE,
}

export interface Task {
  name: string;
  status: TaskStatus;
}
