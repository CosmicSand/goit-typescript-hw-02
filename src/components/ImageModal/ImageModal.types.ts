import { ModalImage } from "../ImageCard/ImageCard.types";

export interface ImageModalProp {
  chosenImage: {
    url: string;
    alt: string;
    name: string;
    location: string;
    portfolio: string;
  };
  onBackDrop: (modalImageObj: ModalImage | null) => void;
  isOpen: boolean;
}
