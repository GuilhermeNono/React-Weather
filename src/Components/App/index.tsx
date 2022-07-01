import React from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import InfoCity from "../InfoCity";
import InfoFull from "../InfoFull";
import SearchBox from "../SearchBox";

import { Container, StatusSunMoon} from "./styles";

const App: React.FC = () => {
  return (
    <Container>
      <StatusSunMoon></StatusSunMoon>
      <SearchBox />
      <InfoCity />
      <InfoFull />
      <GlobalStyles />

    </Container>
  );
};

export default App;
