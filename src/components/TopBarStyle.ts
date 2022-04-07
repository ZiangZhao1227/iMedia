import styled from "styled-components";

export const TopbarContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: #a44cd3;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const TopbarLeft = styled.div`
  flex: 3;
`;

export const TopbarCenter = styled.div`
  flex: 5;
`;

export const TopbarRight = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

export const Logo = styled.span`
  font-size: 30px;
  margin-left: 20px;
  font-weight: 400;
  color: white;
  cursor: pointer;
  font-family: "Shizuru", cursive;
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  width: 80%;
  outline: none;
`;

export const TopbarLinks = styled.div``;

export const TopbarLink = styled.span`
  margin-right: 10px;
  font-size: 17px;
  cursor: pointer;
`;

export const TopbarIcons = styled.div`
  display: flex;
`;

export const TopbarIconItem = styled.div`
  margin-right: 15px;
  cursor: pointer;
  position: relative;
`;

export const TopbarIconBadge = styled.span`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const TopbarImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
