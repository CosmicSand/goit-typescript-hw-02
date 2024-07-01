import ImageCard from "../ImageCard/ImageCard";
import { forwardRef } from "react";
import { BiSolidChevronsUp } from "react-icons/bi";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";
import { Image } from "../App/App.types";

const ImageGallery = forwardRef(function ImageGallery({
  galleryArray,
  isScroll,
  onView,
  ref,
}: ImageGalleryProps) {
  return (
    <main>
      <ul className={css.list} ref={ref}>
        {galleryArray.map((imgage: Image) => (
          <li className={css.item} key={imgage.id} tabIndex={0}>
            <ImageCard image={imgage} onView={onView} />
          </li>
        ))}
      </ul>
      {isScroll && (
        <div className={css.top}>
          <a className={css.arrow} href="#top">
            <BiSolidChevronsUp className={css.icon} size="32" />
          </a>
        </div>
      )}
    </main>
  );
});

export default ImageGallery;
