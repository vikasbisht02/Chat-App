import { RxAvatar } from "react-icons/rx";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          {/* <img src="" alt="Tailwind CSS chat bubble component" /> */}
          <RxAvatar />

        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hii! What is upp?
      </div>
      <div className="chat-footer  opacity-50 text-xs flex gap-1 items-center ">
        12:45
      </div>
    </div>
  );
};

export default Message;
