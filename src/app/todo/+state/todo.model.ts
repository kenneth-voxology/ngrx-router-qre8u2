export interface Todo {
  readonly id: string;
  readonly title: string;
}

export interface TodoState {
  entities: {
    [id: string]: Todo;
  };
  ids: string[];
}