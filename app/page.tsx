import Image from "next/image";
import FeedCard from "./components/FeedCard";
import { TweetModal } from "./components/TweetModal";

export default function Home() {
	return (
		<main>
			<TweetModal />
			<FeedCard />
		</main>
	);
}
