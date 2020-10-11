import React, { useContext, useState } from "react";

import MessageItem from "../MessageItem";
import MessageInput from "../MessageInput";

import { Container } from "./styles";
import { ChatContext } from "../../contexts/ChatContext";

const RightSide: React.FC = () => {
	const [newMessage, setNewMessage] = useState("");

	const { messages, sendMessage } = useContext(ChatContext);

	// const [messages, setMessages] = useState([
	// 	{
	// 		id: 0,
	// 		isMe: false,
	// 		message: "Olá, estou sendo desenvolvida ainda, favor falar com a turma do Time 23",
	// 		time: "00:00",
	// 		name:"Getúlia"
	// 	},
	// ]);

	const handleChange = ({ target }: any) => {
		setNewMessage(target.value);
	};

	const handleSubmit = () => {
		if (newMessage !=="") {
			sendMessage(newMessage);
			setNewMessage("");
		}
	};

	return (
		<Container>
			<main>
				{messages.map((message) => {
					return (
						<MessageItem
							key={message._id}
							isMe={message.fromUser}
							message={message.text}
							time={'00:00'}
							name={'John Doe'}
						/>
					);
				})}
			</main>

			<MessageInput handleChange={handleChange} onClick={handleSubmit} value={newMessage} />

		</Container>
	);
};

export default RightSide;
