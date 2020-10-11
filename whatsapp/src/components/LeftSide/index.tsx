import React from "react";

import {
  Container,
  Header,
  SearchTab,
  SearchIcon,
  StatusIcon,
  ChatIcon,
  DotsIcon,
  ChatList,
} from "./styles";

import getuliaLogo from '../../assets/getulia-logo.png';

import ChatItem from "../ChatItem";

const LeftSide: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={getuliaLogo} alt="Profile" />
        <div>
          <StatusIcon />
          <div className="online" />

          <ChatIcon />
          <DotsIcon />
        </div>
      </Header>

      <SearchTab>
        <div className="search-input">
          <SearchIcon />
          <input type="search" placeholder="Search or start new chat" />
        </div>
      </SearchTab>

      <ChatList>
        <ChatItem />
      </ChatList>
    </Container>
  );
};

export default LeftSide;
