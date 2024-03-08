export class Task {
  constructor(
    public title: string,
    public desc: string,
    public done: boolean,
    public id: number
  ) {}
}

export const taskList: Task[] = [
  { desc: "Go to shop", title: "Hey", done: false, id: 0 },
];
