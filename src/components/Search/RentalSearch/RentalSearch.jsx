import React from "react";
import { SearchForm, Container } from "../../Exports/exports";
function RentalSearch() {
  return (
    <Container>
      <SearchForm
        placeholder="Select Package"
        buttonTitle="Search Rental Cabs"
      />
    </Container>
  );
}

export default RentalSearch;
