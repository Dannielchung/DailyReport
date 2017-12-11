export interface PttFood {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  ip: string;
  comments: Comment[];
  score: number;
  url: string;
  updatetime: string;
}

export interface Comment {
  user: string;
  content: string;
  score: number;
}
