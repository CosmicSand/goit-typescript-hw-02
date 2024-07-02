import { Image } from "./components/App/App.types";

export interface GalleryApiAnswer {
  results: Image[] | [];
  total: number;
  total_pages: number;
}
