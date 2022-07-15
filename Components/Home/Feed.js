import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";

const style = {
  wrapper: `flex-[3] border-r border-l border-[#38444d] overflow-y-scroll `,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "Vairamuthu",
    userName: "056646646",
    avatar:
      "https://avatars.githubusercontent.com/u/88650559?s=400&u=115adb1e78ce0914d7fd1d0526965dbec2190b1e&v=4",
    text: "Hello",
    isProfileImageNft: false,
    timestamp: "2022-07-22T12:23:150Z",
  },
  {
    displayName: "Vairamuthu",
    userName: "vmmuthu31",
    avatar:
      "https://avatars.githubusercontent.com/u/88650559?s=400&u=115adb1e78ce0914d7fd1d0526965dbec2190b1e&v=4",
    text: "Hello",
    isProfileImageNft: false,
    timestamp: "2022-07-10 23:15",
  },
  {
    displayName: "Vairamuthu",
    userName: "vmmuthu31",
    avatar:
      "https://avatars.githubusercontent.com/u/88650559?s=400&u=115adb1e78ce0914d7fd1d0526965dbec2190b1e&v=4",
    text: "Hello",
    isProfileImageNft: false,
    timestamp: "2022-07-22 23:15",
  },
  {
    displayName: "Vairamuthu",
    userName: "vmmuthu31",
    avatar:
      "https://avatars.githubusercontent.com/u/88650559?s=400&u=115adb1e78ce0914d7fd1d0526965dbec2190b1e&v=4",
    text: "Hello",
    isProfileImageNft: false,
    timestamp: "2022-07-22 23:15",
  },
  {
    displayName: "Vairamuthu",
    userName: "vmmuthu31",
    avatar:
      "https://avatars.githubusercontent.com/u/88650559?s=400&u=115adb1e78ce0914d7fd1d0526965dbec2190b1e&v=4",
    text: "Hello",
    isProfileImageNft: false,
    timestamp: "2022-07-22 23:15",
  },
];

export default function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 6)}...${tweet.userName - 4}`}
          text={tweet.text}
          avatar={tweet.avatar}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
}
