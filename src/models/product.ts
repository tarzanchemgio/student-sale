import { User } from "./user";

export class Product {
  id?: string;
  name?: string;
  price?: string;
  newPercentage?: number;
  description?: string;
  images?: string[];
  category?: Category;
  time?: Date;
  city?: string;
  district?: string;
  ward?: string;
  street?: string;
  state?: ProductState;
  amount?: number;
  author?: User;
  isViewed?: boolean;
  isSaved?: boolean;
  thumbnail?: string; // Should be disposed
  location?: string; // Should be disposed
  duration?: string; // Should be disposed

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.newPercentage = parseInt(data.newPercentage);
    this.description = data.description;
    this.images = data.images;
    this.category = data.category;
    this.time = data.time;
    this.city = data.city;
    this.district = data.district;
    this.ward = data.ward;
    this.street = data.street;
    this.state = data.state;
    this.amount = parseInt(data.amount ?? 0);
    this.author = data.author;
    this.isViewed = data.isViewed;
    this.isSaved = data.isSaved;
  }
}

export enum ProductState {
  NEW = "NEW",
  SOLD = "SOLD"
}

export enum Category {
  BOOK = "Sách",
  SCHOOL_SUPPLY = "Dụng cụ học tập",
  CLOTHES = "Quần áo",
  ELECTRONIC = "Đồ điện tử",
  HOUSEHOLD = "Đồ gia dụng",
  OTHER = "Khác"
}