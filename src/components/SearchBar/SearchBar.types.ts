export type SearchingText = string;

export type SearchBarProp = {
  onSearch: (searchingText: SearchingText) => void;
};
