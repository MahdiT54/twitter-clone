import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-7 mt-4">
      Trending
      <div
        className="flex space-x-3 bg-white bg-opacity-10
            w-[300px] h-[44px] p-3 rounded-3xl"
      >
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent
                focus:outline-none
                placeholder:text-gray-600
                "
          placeholder="Search Twitter"
        />
      </div>
      <div
        className="w-[300px] h-[500px] bg-white bg-opacity-10
            rounded-3xl mt-3"
      >
        <h1 className="font-bold text-xl p-3">What's happening</h1>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340K posts</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Entertainment · Trending</p>
          <h1 className="text-[15px] font-bold">Dumbledore</h1>
          <p className="text-xs text-gray-500">17.2K posts</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Entertainment · Trending</p>
          <h1 className="text-[15px] font-bold">Rest in Peace</h1>
          <p className="text-xs text-gray-500">72.4K posts</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Politics · Trending</p>
          <h1 className="text-[15px] font-bold">Christie</h1>
          <p className="text-xs text-gray-500">99.9K posts</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in Technology</p>
          <h1 className="text-[15px] font-bold">Raspberry Pi 5</h1>
          <p className="text-xs text-gray-500">9,599 posts</p>
        </div>
      </div>
      <div
        className="w-[300px] h-[300px] bg-white bg-opacity-10
            rounded-3xl mt-3"
      >
        <h1 className="font-bold text-xl p-3">Who to follow</h1>

        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/bragg.png"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Dev Tanzim</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@FrontDevops1</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/bragg2.png"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Elon Musk</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@elonmusk</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/kylie.jpeg"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Kylie Jenner</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@kyliejenner</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
