import React from 'react';

import { Container, SearchIcon, TextInput} from './styles';

interface Props {
  query: string;
  setQuery: any;
  search: (e:any) => void;
}

const SearchBox: React.FC<Props> = (props:Props) => {
  return (
    <Container>
      <SearchIcon>ICON</SearchIcon>
      <TextInput
        type="text"
        placeholder="Informe sua cidade"
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
        onKeyDown={(e) => props.search(e)}
      />
    </Container>
  );
}

export default SearchBox;