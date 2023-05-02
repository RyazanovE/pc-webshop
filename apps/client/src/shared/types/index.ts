export interface ICard {
  id: number
  title: string
  description: string
  image: string
  discount?: number
  rating: number
}

export interface ICategory {
  id: number,
  image: string
  title: string
}

export interface IFeedback {
  id: number;
  content: string;
  date: string;
  nickname: string
  avatar?: string
}

export interface IGadget {
  id: number;
  title: string;
  description: string;
  subtitle: string;
  model: string;
  price: number;
  discount: number;
  rating: number;
  images?: string[]
}