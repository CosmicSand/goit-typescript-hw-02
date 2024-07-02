import { LoadMoreBtnProp } from "./LoadMoreBtn.types";
import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onLoad }: LoadMoreBtnProp) {
  function handleClick(): void {
    onLoad();
  }

  return (
    <button className={css.btn} type="button" onClick={handleClick}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;
