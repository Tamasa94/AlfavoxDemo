export default interface SearchBarProps {
  initSearchText: string | null;
  eventHandlers: {
    OnSubmit: (searchText: string) => void;
  };
}
