import React from "react";
import { MdCheck } from "react-icons/md";

import "./styles.scss";

interface props {
	isMe: boolean;
	name?: string;
	message: string;
	time: string;
}

const Component: React.FC<props> = ({ isMe, name, message, time }) => {
	return (
		<div
			id="message"
			style={
				isMe
					? { justifyContent: "flex-end" }
					: {}
			}
		>
			<main style={isMe ? { backgroundColor: "#dcf8c6" } : {}}>
				<div id="messageInfo">{isMe ? "" : <span>{name}</span>}</div>

				<p>
					{message}
					<span> {time} <i><MdCheck /><MdCheck /></i> </span>
				</p>
			</main>
		</div>
	);
};

export default Component;
