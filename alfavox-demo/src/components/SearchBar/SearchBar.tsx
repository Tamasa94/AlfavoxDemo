import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBarProps from "./SearchBarProps";
import SearchIcon from "@mui/icons-material/Search";
import DataStorageService from "../../services/DataStorageService/DataStorageService";

const SearchBar = ({
  initSearchText = "",
  eventHandlers: { OnSubmit },
}: SearchBarProps) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText(initSearchText);
  }, [initSearchText]);

  const onSearchSubmitHandler = () => {
    if ((DataStorageService.getItem("search_text") as string) !== searchText) {
      OnSubmit(searchText);
    }
  };

  return (
    <TextField
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
      sx={{ margin: "20px 0" }}
      id="Giphy-TextField-SearchBox"
      label="Search Giphs..."
      value={searchText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <Button
              color="primary"
              sx={{ minWidth: "20px" }}
              onClick={onSearchSubmitHandler}>
              <SearchIcon />
            </Button>
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default SearchBar;
