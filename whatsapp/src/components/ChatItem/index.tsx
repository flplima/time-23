import React from "react";

import getuliaLogo from '../../assets/getulia-logo.png';

import { Container, Chats, ChatLine, Name, Date, LastMessage } from "./styles";

const ChatItem: React.FC = () => {
  return (
    <Container>
      <img src={getuliaLogo} alt="Icon" />

      <Chats>
        <ChatLine>
          <Name>Mercadinho da Ana</Name>
          <Date>19:00</Date>
        </ChatLine>

        <LastMessage>
          <p>Produtos de qualidade</p>
        </LastMessage>
      </Chats>
    </Container>
  );
};

export default ChatItem;
