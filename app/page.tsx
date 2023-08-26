import { Feed } from "./components/Feed";
import FeedCard from "./components/FeedCard";
import { TweetModal } from "./components/TweetModal";

export default function Home() {
	return (
		<main>
			<TweetModal />
			<Feed />
		</main>
	);
}
