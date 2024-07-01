import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import fetchImages from "../../gallery-api";
import "./App.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Image } from "./App.types";
import { SearchingText } from "../SearchBar/SearchBar.types";
import { ModalImage } from "../ImageCard/ImageCard.types";

function App() {
  // const appId = 577372;
  // const accessKey = "MgGVu-2Aj7GbcWHyEAULVPxtWi0-9yK_brGw5GgXLKI";
  // const securityKey = "0Bi-McYmSz35ROYe7Vcwkh3cNuZnzS2E91IQZu5IUms";

  const [gallery, setGallery] = useState<Image[] | []>([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [modalImage, setModalImage] = useState<ModalImage | null>(null);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [searchingText, setSearchingText] = useState("");
  const [isScroll, setIsScroll] = useState(false);

  const galleryRef = useRef<HTMLElement>(null);

  window.onscroll = function scrollSetting(): void {
    if (window.scrollY > 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    async function galleryBuilding(searchingText: SearchingText, page: number) {
      try {
        if (searchingText.length === 0) return;
        setError(null);
        setIsLoading(true);
        const resp = await fetchImages(searchingText, page);
        if (resp.results.length === 0) {
          throw new Error("Nothing found!");
        }
        if (page > 1) {
          setGallery((prevGallery) => [...prevGallery, ...resp.results]);
          console.log(gallery);
        } else {
          setGallery(resp.results);
        }
        if (resp.total / 9 > page) {
          setIsLoadMore(true);
        } else {
          setIsLoadMore(false);
        }
      } catch (error) {
        setError(error as Error | null);
        setIsLoadMore(false);
        console.log(error);
        toast.error(`Oooops! ${error.message}!`);
      } finally {
        setIsLoading(false);
      }
    }
    galleryBuilding(searchingText, page);
  }, [searchingText, page]);

  //  ================= Скрол вниз на три картки при оновленні галереї ===

  useEffect(() => {
    if (
      galleryRef.current &&
      galleryRef.current.children.length > 0 &&
      page > 1
    ) {
      const lastChild = galleryRef.current.lastChild as HTMLElement;
      if (lastChild) {
        const galleryElementHeight =
          lastChild.getBoundingClientRect().height * 3 + 45;

        window.scrollBy({
          top: galleryElementHeight,
          behavior: "smooth",
        });
      }
    }
  }, [gallery, page]);

  // ============= Фуннкції оновлення станів ===================

  function backDropSetting(modalImageObj: ModalImage): void {
    setModalImage(modalImageObj);
  }

  function handleSearch(searchingText: SearchingText): void {
    setGallery([]);
    setIsLoadMore(false);
    setSearchingText(searchingText);
    setPage(1);
  }

  function handleLoad(): void {
    setPage(page + 1);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #f4ea84",
            padding: "16px",
            color: "#f4ea84",
            backgroundColor: "#454545",
          },
        }}
      />
      {error ? (
        <ErrorMessage errorObj={error} />
      ) : (
        <ImageGallery
          ref={galleryRef}
          galleryArray={gallery}
          isScroll={isScroll}
          onView={backDropSetting}
        />
      )}
      {modalImage && (
        <ImageModal
          chosenImage={modalImage}
          isOpen={modalImage && true}
          onBackDrop={backDropSetting}
        />
      )}
      {isloading && <Loader />}
      {isLoadMore && !isloading && <LoadMoreBtn onLoad={handleLoad} />}
    </>
  );
}

export default App;
