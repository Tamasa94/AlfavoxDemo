import { Pagination } from "@mui/material";
import React, { useMemo, useState } from "react";
import ContentPaginationProps from "./ContentPaginationProps";
import config from './../../data/api-setup.json'

const ContentPagination = ({itemCount, onChangePage}: ContentPaginationProps) => {
  const [page, setPage] = useState(0);

  const count = useMemo(() => Math.floor(itemCount / config.limit), [itemCount]);

  return <Pagination count={count} page={page} onChange={(e, value) => {
    console.log(value);
    setPage(value);
    onChangePage(e,value);
  }}/>;
};

export default ContentPagination;
