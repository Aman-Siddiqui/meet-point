import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaVolumeHigh } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { IoVideocamOff } from "react-icons/io5";
import { BsMicMuteFill } from "react-icons/bs";
import { ImEnlarge2 } from "react-icons/im";
import { LuRefreshCcw } from "react-icons/lu";
import { RiComputerFill } from "react-icons/ri";
import { FcEndCall } from "react-icons/fc";
import { FaSmile } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BiSolidTv } from "react-icons/bi";
import { RiSettings2Fill } from "react-icons/ri";
import { MdOutlineAddBox } from "react-icons/md";
import { RiShieldKeyholeLine } from "react-icons/ri";

const MeetingPage = () => {
  const participants = ["V", "V", "V", "V"];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex  p-4">

        <div className="relative flex-grow bg-gray-900 flex items-center justify-center">
          <div className="absolute top-2 left-2">
            <RiShieldKeyholeLine />
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Main Room is currently empty
            </p>
          </div>
        </div>

        <div className="w-4/6 grid grid-cols-2 gap-2 p-2 border border-green-400 rounded-lg h-full">
          {participants.map((participant, idx) => (
            <div
              key={idx}
              className="relative bg-gray-800 h-64 rounded-lg flex items-center justify-center"
            >
              <div className="text-xl font-semibold bg-green-500 w-12 h-12 flex items-center justify-center rounded-lg">
                {participant}
              </div>
              <div className="absolute bottom-2 left-2 text-sm">
                Venkatesh V.
              </div>
              <div className="absolute top-2 right-2 text-gray-400">
                <i className="fas fa-microphone-slash"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-1 flex items-center text-xs">
        <div className="flex items-center mr-12">
          <MdOutlineAddBox className="size-4" />
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-1 py-1 text-gray-400 ">Main Room</button>

          <button className="px-1 py-1 text-gray-400  border-b-2 border-green-500">
            Lounge
          </button>
          <button className="px-1 py-1 text-gray-400 ">Conf 1</button>
          <button className="px-1 py-1 text-gray-400 ">Conf 2</button>
          <button className="px-1 py-1 text-gray-400 ">#UX</button>
          <button className="px-1 py-1 text-gray-400 ">#UI</button>
          <button className="px-1 py-1 text-gray-400 ">#AI</button>
          <button className="px-1 py-1 text-gray-400 ">#API*</button>
          <button className="px-1 py-1 text-gray-400 ">#Ops</button>
          <button className="px-1 py-1 text-gray-400 ">#Robotics</button>
          <button className="px-1 py-1 text-gray-400 ">@HR</button>
          <button className="px-1 py-1 text-gray-400 ">#Leadership</button>
          <button className="px-1 py-1 text-gray-400 ">@Coffee Break*</button>
        </div>
      </div>

      <div className="bg-gray-900 py-5 px-4 flex justify-between items-center">
        <div className="flex space-x-5 text-gray-400 text-xl">
          <IoEyeSharp />
          <FaVolumeHigh />
          <HiSpeakerphone />
        </div>

        <div className="flex space-x-6 text-gray-400 text-xl">
          <IoVideocamOff />
          <BsMicMuteFill />
          <ImEnlarge2 />
          <LuRefreshCcw />
          <RiComputerFill />
          <FcEndCall />
        </div>

        <div className="flex space-x-5 text-gray-400 text-xl">
          <FaSmile />
          <IoPeopleSharp />
          <BiMessageRoundedDetail />
          <BiSolidTv />
          <RiSettings2Fill />
        </div>
      </div>
    </div>
  );
};

export default MeetingPage;
