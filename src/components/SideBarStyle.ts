import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex: 3;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  position: sticky;
  top: 60px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SidebarWrapper = styled.div`
  padding: 20px;
`;

export const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SidebarFriendList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SidebarFriend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const SidebarFriendImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`;

export const SidebarFriendName = styled.span``;

export const SidebarListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SidebarListItemText = styled.span``;

export const SidebarButton = styled.button`
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  transition: 500ms;
  background-color: #d8829d;
  cursor: pointer;
  &:hover {
    background-color: #d8829d;
    color: white;
  }
`;

export const SidebarHr = styled.hr`
  margin: 20px 0;
`;
