import { Task, TaskStatus } from '@repro-ts-jest-enum-bug/models';
import { markAsDone } from './utils';

describe('markAsDone', function () {
  it('should update task status immutably', function () {
    const taskOpen: Task = {
      name: 'Create repro for ts-jest',
      status: TaskStatus.OPEN,
    };

    const taskDone = markAsDone(taskOpen);

    expect(taskDone).not.toBe(taskOpen);
    expect(taskDone.status).toBe(TaskStatus.DONE)
  });
});
