import styled from "styled-components";

import colors from "../config/colors";
import search_icon from '../assets/images/search_icon.png';


const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 47px;
  padding: 8px;
  width: 255px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  color: ${colors.grey};
  font-size: 13px;
  margin-left: 10px;
`;


const SearchIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const SearchBar = (props) => {
  return (
    <SearchBarContainer className={props.className}>
      <SearchInput
        type="text"
        placeholder={props.placeholder || "Search"}
        onChange={props.onChange}
        value={props.value}
      />
      <SearchIcon src={search_icon} alt="Search Icon" className="ml-4" />
    </SearchBarContainer>
  );
};

export default SearchBar;
