import { useId } from "react";
import toast from "react-hot-toast";
import { FaExclamationCircle } from "react-icons/fa";
import css from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const inpId = useId();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const searchingText = form.elements.search.value.toLowerCase();
    if (searchingText.trim().length === 0) {
      toast("Oh, no! You didn't type any letter!", {
        icon: <FaExclamationCircle size="24" />,
      });
      return;
    }
    onSearch(searchingText);
    form.reset();
  }
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          id={inpId}
          autoComplete="off"
          autoFocus
          placeholder="Let's search and dive in pleasure!"
          aria-label="Searhing imput"
        />
        <button className={css.btn} type="submit">
          Go!
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
