import { useEffect, useState } from "react";
import Tweet from "./Tweet";
import TweetInput from "./TweetInput";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import Link from "next/link";

export default function PostFeed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTweets(snapshot.docs);
    });

    return unsubscribe;
  }, []);

  return (
    <div
      className="sm:ml-16 xl:ml-[350px] max-w-2xl flex-grow
        border-gray-700 border-x
        "
    >
      <div
        className="px-3 py-2 text-lg sm:text-xl font-bold
            border-b border-gray-700 sticky top-0 z-50"
      >
        Home
      </div>
      <TweetInput />

      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} id={tweet.id} data={tweet.data()} />;
      })}

      {/* <Tweet /> */}

      <div className="flex space-x-3 p-3 border-gray-700">
        <img
          className="w-11 h-11 rounded-full object-cover"
          src="/assets/bragg.png"
        />
        <div>
          <div className="text-gray-500 flex items-center space-x-2 mb-1">
            <h1 className="text-white font-bold">Dev Tanzim</h1>
            <span>@FrontDevops1</span>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </div>
          <span>
            When signing up, please do not use real information!
            <br />
            <br />
            Make sure to follow me on twitter @FrontDevops1 to stay updated!
            <br />
            Looking for a reliable Front-end Software Engineer for your team?{" "}
            <br />
            <a href="https://www.mahditanzim.me" target="_blank">
            https://www.mahditanzim.me
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
