import { Image } from "../App/App.types";

export interface ModalImage {
  url: string;
  alt: string;
  name: string;
  location: string;
  portfolio: string;
}

export interface ImageCardProp {
  image: Image;
  onView: (modalImage: any) => void;
}
