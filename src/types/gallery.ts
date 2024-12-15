export interface Image {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  text: string;
  user: string;
  timestamp: Date;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}