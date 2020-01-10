import { Task, TaskStatus } from '@repro-ts-jest-enum-bug/models';

export function markAsDone(task: Task): Task {
  return { ...task, status: TaskStatus.DONE };
}
