import React from "react";
import { MdSend, MdInsertEmoticon, MdAttachment } from "react-icons/md";

import "./styles.scss";

interface props {
	value: string;
	handleChange?: (event: any) => any;
	onClick?: () => any;
}

const Component: React.FC<props> = ({ handleChange, value, onClick }) => {
	return (
		<div id="messageInput">
			<MdInsertEmoticon />
			<MdAttachment id="Attachment" />
			<input
				type="text"
				placeholder="Type a message"
				onChange={handleChange}
				value={value}
			/>
			<MdSend onClick={onClick} />
		</div>
	);
};

export default Component;
