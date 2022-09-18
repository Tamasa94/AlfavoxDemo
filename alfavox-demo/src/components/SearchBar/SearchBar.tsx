import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBarProps from "./SearchBarProps";
import * as Style from "./style";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({
  initSearchText = "",
  eventHandlers: { OnSubmit },
}: SearchBarProps) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText(initSearchText);
  }, [initSearchText]);

  return (
    <Style.SearchBarContainer>
      <TextField
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        id="Giphy-TextField-SearchBox"
        label="Search Giphs..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Button
                color="primary"
                sx={{ minWidth: "20px" }}
                onClick={() => OnSubmit(searchText)}>
                <SearchIcon />
              </Button>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Style.SearchBarContainer>
  );
};

export default SearchBar;
