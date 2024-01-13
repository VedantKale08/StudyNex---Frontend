import socket from "@/lib/socketInstance";
import { cloneDeep } from "lodash";
import { useParams, useRouter } from "next/navigation";

const { useState } = require("react");

const usePlayer = (myPeer, peerIns, message) => {
  const roomId = useParams().id;
  const [players, setPlayers] = useState([]);
  const router = useRouter();

  const leaveRoom = () => {
    socket.emit("user-leave", myPeer, roomId);
    peerIns.disconnect();
    router.push("/");
  };

  const toggleAudio = () => {
    setPlayers((prev) => {
      const copy = cloneDeep(prev);
      copy[null].muted = !copy[null].muted;
      return { ...copy };
    });

    socket.emit("user-toggle-audio", myPeer, roomId);
  };

  const toggleVideo = () => {
    setPlayers((prev) => {
      const copy = cloneDeep(prev);
      copy[null].playing = !copy[null].playing;
      return { ...copy };
    });

    socket.emit("user-toggle-video", myPeer, roomId);
  };

  const sendMessage = () => {
    socket.emit("user-send-message", myPeer, message, roomId);
  };

  return {
    players,
    setPlayers,
    toggleAudio,
    toggleVideo,
    leaveRoom,
    sendMessage,
  };
};

export default usePlayer;
