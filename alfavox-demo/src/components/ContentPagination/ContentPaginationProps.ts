export default interface ContentPaginationProps {
  itemCount: number;
  onChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
}
