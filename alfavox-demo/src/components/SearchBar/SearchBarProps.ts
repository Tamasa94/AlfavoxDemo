export default interface SearchBarProps {
  initSearchText: string;
  eventHandlers: {
    OnSubmit: (searchText: string) => void;
  };
}
