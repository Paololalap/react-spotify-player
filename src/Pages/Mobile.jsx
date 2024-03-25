/* eslint-disable react/prop-types */
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
  faTv,
} from "@fortawesome/free-solid-svg-icons";

const Mobile = ({ className }) => {
  return (
    <div className={className}>
      <div className="mx-auto h-auto w-[415px]">
        <div className="relative flex justify-between pt-6 text-white">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="h-6 max-w-full cursor-pointer transition-all hover:translate-y-1"
          />
          <p className="absolute left-1/2 top-1/2 mt-[0.3rem] -translate-x-1/2 text-xs uppercase">
            Recommended for you
          </p>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="h-6 max-w-full cursor-pointer"
          />
        </div>
        <img
          src="https://lastfm.freetls.fastly.net/i/u/ar0/41bf054f9ab8ba7e2e60be69368fef17.jpg"
          className="mt-10 h-[415px] rounded-lg"
        ></img>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-white">
              Kaiju no Hanauta
            </div>
            <div className="text-lg text-white">Vaundy</div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMinus}
              className="h-8 max-w-full scale-[0.6] cursor-pointer rounded-full p-2 px-[0.6rem] text-white ring-4 ring-white  transition-colors hover:border-0 hover:bg-white hover:text-slate-900"
            />
            <FontAwesomeIcon
              icon={faPlus}
              className="h-8 max-w-full scale-[0.6] cursor-pointer rounded-full p-2 px-[0.6rem] text-white ring-4 ring-white transition-colors hover:border-0 hover:bg-white hover:text-slate-900"
            />
          </div>
        </div>
        <div className="relative mt-2 rounded border-2">
          <div className="absolute top-[-6px] size-3 rounded-full border-2 bg-white"></div>
        </div>
        <div className="mt-2 flex justify-between">
          <div className="text-white">
            0:01
          </div>
          <div className="text-white">
            3:05
          </div>
        </div>
        <div className="relative flex items-center justify-between text-white">
          <FontAwesomeIcon
            icon={faShuffle}
            className="h-5 max-w-full cursor-pointer text-green-900"
          />
          <div className="absolute left-[0.34rem] top-[0.7rem] cursor-pointer select-none text-3xl text-green-900">
            .
          </div>
          <div className="flex items-center space-x-7">
            <FontAwesomeIcon
              icon={faBackwardStep}
              className="h-7 max-w-full cursor-pointer  hover:opacity-90"
            />
            <FontAwesomeIcon
              icon={faCirclePause}
              className="h-14 max-w-full cursor-pointer  hover:opacity-90"
            />
            <FontAwesomeIcon
              icon={faForwardStep}
              className="h-7 max-w-full cursor-pointer  hover:opacity-90"
            />
          </div>
          <img
            src="repeat.svg"
            alt=""
            className="h-5 max-w-full cursor-pointer invert"
          />
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex cursor-pointer space-x-2">
            <FontAwesomeIcon icon={faTv} className="text-green-500" />
            <div className="text-xs text-green-500">Web Player (Chrome)</div>
          </div>
          <div className="flex space-x-5">
            <img
              src="/share.png"
              alt=""
              className="h-5 max-w-full cursor-pointer invert"
            />
            <div className="flex cursor-pointer flex-col items-center space-y-[3px]">
              <div className="h-2 w-5 rounded-md border-2"></div>
              <div className="w-[1.1rem] rounded-sm border-2"></div>
              <div className="w-[1.1rem] rounded-sm border-2"></div>
            </div>
          </div>
        </div>
        <div className="relative mt-6 size-[415px] rounded-2xl bg-[#ff00e4]  p-5">
          <div className="absolute left-1/2 top-[4.5rem] h-24 w-[415px] -translate-x-1/2 bg-gradient-to-b from-[#ff00e4] to-transparent to-90%"></div>
          <div className="flex items-center justify-between">
            <p className="z-10 self-start text-lg font-bold">Lyrics</p>
            <div className="flex w-36 items-center justify-between">
              <div className="relative cursor-pointer">
                <img
                  src="/translate.png"
                  alt=""
                  className="absolute left-2 top-2 z-10 h-5 max-w-full invert"
                />
                <div className="top-0 size-9 rounded-full bg-black opacity-50"></div>
              </div>
              <div className="relative cursor-pointer">
                <img
                  src="/share.png"
                  alt=""
                  className="absolute left-[0.4rem] top-2 z-10 h-5 max-w-full invert"
                />
                <div className="top-0 size-9 rounded-full bg-black opacity-50"></div>
              </div>
              <div className="relative cursor-pointer">
                <img
                  src="/wide.png"
                  alt=""
                  className="absolute left-2 top-2 z-10 h-5 max-w-full invert"
                />
                <div className="top-0 size-9 rounded-full bg-black opacity-50"></div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col justify-center overflow-x-hidden leading-[1.4]">
            <p className="text-[2.20rem] font-bold">思い出すのは君の歌</p>
            <p className="text-[2.20rem] font-bold">会話よりも鮮明だ</p>
            <p className="whitespace-nowrap text-[2.20rem] font-bold ">
              どこに行ってしまったの
            </p>
            <p className="text-[2.20rem] font-bold text-black">
              いつも探すんだよ
            </p>
            <p className="text-[2.20rem] font-bold text-black">
              思い出すのは君の歌
            </p>
          </div>
        </div>
        <div className='mt-6 h-[440px] w-[415px] rounded-2xl bg-gray-800 bg-[url("https://popscene.jp/img/A_20230729.jpeg")] bg-contain bg-top bg-no-repeat p-5'>
          <div className="h-[257px]">
            <p className="text-lg font-bold text-white">About the artist</p>
          </div>
          <div className="">
            <div className="mt-3 flex items-center justify-between ">
              <div className="flex flex-col">
                <p className="text-xl font-bold text-white">Vaundy</p>
                <p className="text-gray-400">5.3M monthly listeners</p>
              </div>
              <div className="cursor-pointer rounded-full border-2 p-2 px-4 font-bold text-white transition-colors hover:bg-white hover:text-gray-800">
                Following
              </div>
            </div>
            <p className="mt-3 block text-gray-400">
              Vaundy (バウンディ)。23歳。作詞、作曲、アレン
              ジを全て自分でこなし、デザインや映像もディレク
              ション、セルフプロデュースす
              <span className="text-white">...see more</span>
            </p>
          </div>
        </div>
        <div className='mt-6 h-[24rem] w-[415px] rounded-2xl bg-gray-800 bg-[url("https://pbs.twimg.com/media/F2Nm5clbYAA9lzK.jpg")] bg-contain bg-top bg-no-repeat p-5'>
          <div className="h-[16.3rem]">
            <p className="text-lg font-bold text-white">Live Events</p>
          </div>
          <p className="mt-3 text-xl font-bold text-white">Vaundy</p>
          <div className="flex items-center justify-between">
            <div className="mt-3 leading-3">
              <p className="text-sm text-white">Mar 23 - May 6</p>
              <p className="text-xs text-gray-400">7 events</p>
            </div>
            <div className="-mt-8 cursor-pointer rounded-full border-2 p-2 px-4 font-bold text-white transition-colors hover:bg-white hover:text-gray-800">
              Find tickets
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
