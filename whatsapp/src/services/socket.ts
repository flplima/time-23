import io from 'socket.io-client';

const socket = io('http://localhost:3002');

export default socket;
