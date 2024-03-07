import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        src="https://yt4.ggpht.com/ytc/AIdro_mslc2daBozPAGhU86gOwhP13tUOwI8mwLgFQ=s64-c-k-c0x00ffffff-no-rj"
        alt="user"
        className="h-8 rounded-full"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
