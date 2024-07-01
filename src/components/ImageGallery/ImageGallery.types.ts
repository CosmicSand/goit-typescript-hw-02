import { Image } from "../App/App.types";
import { ModalImage } from "../ImageCard/ImageCard.types";

export interface ImageGalleryProps {
  ref: React.RefObject<HTMLElement>;
  galleryArray: Image[] | [];
  isScroll: boolean;
  onView: (modalImageObj: ModalImage) => void;
}
