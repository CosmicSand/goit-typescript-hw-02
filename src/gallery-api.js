import axios from "axios";

const accessKey = "MgGVu-2Aj7GbcWHyEAULVPxtWi0-9yK_brGw5GgXLKI";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${accessKey}`;
axios.defaults.headers.common["Accept-Version"] = `v1`;

async function fetchImages(searchingText, page = 1) {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchingText,
      per_page: 9,
      page,
      order_by: "popular",
      orientation: "landscape",
    },
  });
  return response.data;
}

export default fetchImages;
