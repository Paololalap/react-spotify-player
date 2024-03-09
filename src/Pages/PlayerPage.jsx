import React, { useState } from "react";
import { Slider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEllipsisVertical,
  faMinus,
  faPlus,
  faShuffle,
  faBackwardStep,
  faCirclePause,
  faForwardStep,
  faRepeat,
  faTv,
  faShareNodes,
  faLanguage,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const PlayerPage = () => {
  /* const [sliderValue, setSliderValue] = useState([0, 185]);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}:${mins < 10 ? "0" : ""}${mins}`;
  }; */

  /* const handleSliderChange = (value) => {
    console.log("Slider Value before setting:", value); // Add this line
    setSliderValue(value);
    console.log("Slider Value after setting:", sliderValue); // Add this line
  }; */

  return (
    <div className='w-auto bg-gray-900 min-h-screen'>
      <div className='w-[415px] mx-auto sm:hidden'>
        <div className='flex justify-between text-white pt-6 relative'>
          <FontAwesomeIcon
            icon={faChevronDown}
            className='max-w-full h-6 cursor-pointer hover:translate-y-1 transition-all'
          />
          <p className='text-xs uppercase absolute mt-[0.3rem] top-1/2 left-1/2 -translate-x-1/2'>
            Recommended for you
          </p>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className='max-w-full h-6 cursor-pointer'
          />
        </div>
        <img
          src='https://lastfm.freetls.fastly.net/i/u/ar0/41bf054f9ab8ba7e2e60be69368fef17.jpg'
          className='h-[415px]  mt-10 rounded-lg'
        ></img>
        <div className=' mt-6 flex justify-between items-center'>
          <div className='flex flex-col'>
            <div className='text-white text-2xl font-bold'>
              Kaiju no Hanauta
            </div>
            <div className='text-white text-lg'>Vaundy</div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMinus}
              className='max-w-full text-white h-8 p-2 px-[0.6rem] ring-4 ring-white rounded-full scale-[0.6] cursor-pointer  hover:text-slate-900 hover:bg-white transition-colors'
            />
            <FontAwesomeIcon
              icon={faPlus}
              className='max-w-full text-white h-8 p-2 px-[0.6rem] ring-4 ring-white rounded-full scale-[0.6] cursor-pointer hover:text-slate-900 hover:bg-white transition-colors'
            />
          </div>
        </div>
        {/* <Slider
          barClassName='mt-2'
          tooltip={false}
          min={0}
          max={185}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
        /> */}
        <div className='border-2 mt-2 relative rounded'>
          <div className='absolute size-3 border-2 rounded-full bg-white top-[-6px]'></div>
        </div>
        <div className='mt-2 flex justify-between'>
          <div className='text-white'>
            0:01{/* {formatTime(sliderValue[0])} */}
          </div>
          <div className='text-white'>
            3:05{/* {formatTime(sliderValue[1])} */}
          </div>
        </div>
        <div className='flex justify-between items-center text-white relative'>
          <FontAwesomeIcon
            icon={faShuffle}
            className='text-green-900 hover:scale-110 z-10'
          />
          <div className='text-3xl text-green-900 absolute left-1'>.</div>
          <div className='space-x-6 items-center flex'>
            <FontAwesomeIcon
              icon={faBackwardStep}
              className='max-w-full cursor-pointer h-7 hover:opacity-90'
            />
            <FontAwesomeIcon
              icon={faCirclePause}
              className='max-w-full cursor-pointer h-14 hover:opacity-90'
            />
            <FontAwesomeIcon
              icon={faForwardStep}
              className='max-w-full cursor-pointer h-7 hover:opacity-90'
            />
          </div>
          <FontAwesomeIcon
            icon={faRepeat}
            className='cursor-pointer hover:opacity-90 '
          />
        </div>
        <div className='flex justify-between mt-2'>
          <div className='flex space-x-2 cursor-pointer'>
            <FontAwesomeIcon icon={faTv} className='text-green-500' />
            <div className='text-green-500 text-xs'>Web Player (Chrome)</div>
          </div>
          <div className='flex space-x-5'>
            <img
              src='../../public/share.png'
              alt=''
              className='max-w-full h-5 invert cursor-pointer'
            />
            <div className='space-y-[3px] flex flex-col items-center cursor-pointer'>
              <div className='w-5 h-2 border-2 rounded-md'></div>
              <div className='w-[1.1rem] border-2 rounded-sm'></div>
              <div className='w-[1.1rem] border-2 rounded-sm'></div>
            </div>
          </div>
        </div>
        <div className='size-[415px] mt-6 p-5 rounded-2xl bg-[#ff00e4]  relative'>
          <div className='w-[415px] h-24 absolute top-[4.5rem] left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#ff00e4] to-transparent to-90%'></div>
          <div className='flex items-center justify-between'>
            <p className='text-lg font-bold self-start z-10'>Lyrics</p>
            <div className='w-36 flex items-center justify-between'>
              <div className='relative cursor-pointer'>
                <img
                  src='../../public/translate.png'
                  alt=''
                  className='max-w-full h-5 invert z-10 absolute top-2 left-2'
                />
                <div className='size-9 rounded-full bg-black top-0 opacity-50'></div>
              </div>
              <div className='relative cursor-pointer'>
                <img
                  src='../../public/share.png'
                  alt=''
                  className='max-w-full h-5 invert z-10 absolute top-2 left-[0.4rem]'
                />
                <div className='size-9 rounded-full bg-black top-0 opacity-50'></div>
              </div>
              <div className='relative cursor-pointer'>
                <img
                  src='../../public/wide.png'
                  alt=''
                  className='max-w-full h-5 invert z-10 absolute top-2 left-2'
                />
                <div className='size-9 rounded-full bg-black top-0 opacity-50'></div>
              </div>
            </div>
          </div>
          <div className='leading-normal flex flex-col justify-center mt-5 overflow-x-hidden'>
            <p className='text-[2.20rem] font-bold'>思い出すのは君の歌</p>
            <p className='text-[2.20rem] font-bold'>会話よりも鮮明だ</p>
            <p className='text-[2.20rem] font-bold whitespace-nowrap '>
              どこに行ってしまったの
            </p>
            <p className='text-[2.20rem] font-bold text-black'>
              いつも探すんだよ
            </p>
            <p className='text-[2.20rem] font-bold text-black'>
              思い出すのは君の歌
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
