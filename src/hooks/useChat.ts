export {};

// import { useEffect, useState } from "react";

// const MY_HOST_NAME = "";
// // eslint-disable-next-line no-shadow
// export enum MySocketState {
//   onNewChatReceived = "onNewChatReceived",
//   onConnectionFailed = "onConnectionFaield",
//   onConnectionOpened = "onConnectionOpened",
// }

// // TODO
// export const useMySocket = (
//   onConnectionStateChanged: (state: MySocketState) => void,
// ) => {
//   const [responseMessage, setResponseMessage] = useState("");

//   const connectStart = () => {
//     const ws = new WebSocket(MY_HOST_NAME);
//     ws.onmessage = e => {
//       e.preventDefault();
//       const { data } = e;

//       setResponseMessage(data);
//       onConnectionStateChanged(MySocketState.onNewChatReceived);
//     };

//     ws.onopen = () => {
//       onConnectionStateChanged(MySocketState.onConnectionOpened);
//     };

//     ws.onclose = () => {
//       onConnectionStateChanged(MySocketState.onConnectionFailed);
//     };
//   };

//   useEffect(() => {
//     connectStart();
//   }, []);
//   return { responseMessage };
// };
