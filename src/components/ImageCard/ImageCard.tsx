import css from "./ImageCard.module.css";
import { MouseEvent } from "react";
import { Image } from "../App/App.types";
import { ImageCardProp } from "./ImageCard.types";

function ImageCard({
  image: {
    alt_description,
    likes,
    user,
    urls: { small, regular },
  },
  onView,
}: ImageCardProp) {
  function handleClick(e: MouseEvent) {
    // if (e.target.nodeName !== "IMG") return;
    const imageTargeted = e.target as HTMLImageElement;
    const imageData = imageTargeted.dataset;
    const modalImage = {
      url: imageData.url,
      alt: imageTargeted.getAttribute("alt"),
      name: imageData.author,
      location: imageData.location,
      portfolio: imageData.portfolio,
    };
    onView(modalImage);
  }

  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={small}
        alt={alt_description}
        data-url={regular}
        data-likes={likes}
        data-author={user.name}
        data-location={user.location}
        data-portfolio={user.links.html}
        width={300}
        height={200}
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageCard;
