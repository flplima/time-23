import React, { useState } from "react";

import MessageItem from "../MessageItem";
import MessageInput from "../MessageInput";

import { Container } from "./styles";

const RightSide: React.FC = () => {
	const [newMessage, setNewMessage] = useState("");

	const [messages, setMessages] = useState([
		{
			id: 0,
			isMe: false,
			message: "Olá, estou sendo desenvolvida ainda, favor falar com a turma do Time 23",
			time: "00:00",
			name:"Getúlia"
		},
	]);

	const handleChange = ({ target }: any) => {
		setNewMessage(target.value);
	};

	const handleSubmit = () => {
		if (newMessage !=="") {
			setMessages([
				...messages,
				{
					id: messages.length + 1,
					isMe: true,
					message: newMessage,
					time: "19:09",
					name: "Pedro"
				},
			]);
			setNewMessage("");
		}
	};

	return (
		<Container>
			<main>
				{messages.map((message) => {
					return (
						<MessageItem
							key={message.id}
							isMe={message.isMe}
							message={message.message}
							time={message.time}
							name={message.name}
						/>
					);
				})}
			</main>

			<MessageInput handleChange={handleChange} onClick={handleSubmit} value={newMessage} />

		</Container>
	);
};

export default RightSide;
