import React from 'react';

import { Container, SearchIcon, TextInput} from './styles';

const SearchBox: React.FC = () => {
  return (
    <Container>
        <SearchIcon>ICON</SearchIcon>
        <TextInput type="text" placeholder="Informe sua cidade" />
    </Container>
  );
}

export default SearchBox;