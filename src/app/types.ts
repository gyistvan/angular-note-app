export type Note = {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
};

export type Log = {
  createdAt: Date;
  log: string;
};
