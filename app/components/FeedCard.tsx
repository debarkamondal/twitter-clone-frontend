import React from "react";

const FeedCard = () => {
	return (
		<div className="flex gap-2 p-2">
			<div className="h-full">
				<div className="bg-white rounded-full w-12 h-12 col-span-1 row-span-full"></div>
			</div>
			<div>
				<div className="">Name</div>
				<div className="">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
					adipisci debitis nostrum tempore autem velit asperiores dolore aliquam
					alias quos?
				</div>
			</div>
		</div>
	);
};

export default FeedCard;
