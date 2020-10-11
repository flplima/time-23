import React from "react";

import { Container, Chats, ChatLine, Name, Date, LastMessage } from "./styles";

const ChatItem: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/pedr0aroucha.png" alt="Icon" />

      <Chats>
        <ChatLine>
          <Name>Pedro</Name>
          <Date>19:00</Date>
        </ChatLine>

        <LastMessage>
          <p>Hi, my name is Pedro</p>
        </LastMessage>
      </Chats>
    </Container>
  );
};

export default ChatItem;
