import { Pagination } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import ContentPaginationProps from "./ContentPaginationProps";
import config from "./../../data/api-setup.json";
import * as Style from "./style";
import DataStorageService from "../../services/DataStorageService/DataStorageService";

const ContentPagination = ({
  itemCount,
  onChangePage,
}: ContentPaginationProps) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(Number(DataStorageService.getItem("offset")));
  },[]);

  const count = useMemo(() => Math.floor(itemCount / config.limit), [
    itemCount,
  ]);

  return (
    <Style.PaginationWrapper>
      <Pagination
        size="large"
        count={count}
        page={page}
        onChange={(e, value) => {
          setPage(value);
          onChangePage(e, value);
          DataStorageService.setItem("offset", value.toString())
        }}
      />
    </Style.PaginationWrapper>
  );
};

export default ContentPagination;
