import styled from "styled-components";

export const Container = styled.div`
  width: 786px;
  height: 83px;
  max-width: 100%;
  background: #D9EDDF;
  color: #000;
  border-radius: 0px 0px 105px 105px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 27px;
  
`;

export const SearchIcon = styled.div`
    margin-left:40px;
    background-image: url("./images/icon_search.svg");
    background-size: cover;
    width: 54px;
    height: 54px;
`;

export const TextInput = styled.input`
  font-size: 36px;
  background: none;
  border: none;
  border-radius: 3px;
`;
