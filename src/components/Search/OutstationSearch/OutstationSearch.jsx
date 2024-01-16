import React from "react";
import { Container, SearchForm } from "../../Exports/exports";
function OutstationSearch() {
  return (
    <Container>
      <SearchForm
        placeholder="Enter Destination"
        buttonTitle="Search Outstation Cabs"
      />
    </Container>
  );
}

export default OutstationSearch;
