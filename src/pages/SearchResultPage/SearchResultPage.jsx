import React from "react";
import {
  Container,
  SearchResultComponent
} from "../../components/Exports/exports";
import { useSelector } from "react-redux";
function SearchResultPage() {
  const searchResults = useSelector((state) => state.search.searchResult);
  return (
    <Container>
      <SearchResultComponent />
    </Container>
  );
}

export default SearchResultPage;
