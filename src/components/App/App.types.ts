export interface Image {
  id: string;
  alt_description: string;
  heigth: number;
  width: number;
  likes: number;
  user: {
    name: string;
    location: string;
    links: {
      html: string;
    };
  };
  urls: {
    small: string;
    regular: string;
  };
}
