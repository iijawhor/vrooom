import React from "react";
import { Container, SearchForm } from "../../Exports/exports";
function DailySearch() {
  return (
    <Container>
      <SearchForm
        placeholder="Enter Destination"
        buttonTitle="Search Vroom Cabs"
      />
    </Container>
  );
}

export default DailySearch;
