import React from "react";



const HeadTittle = (props) => {
	return (
		<div className={`my-4 flex items-end w-full`}>
			<h1 className="text-white font-semibold text-2xl flex sm:whitespace-nowrap">
				{props.title}
			</h1>
			<hr className="w-full sm:flex hidden h-[1.5px] ml-1 -translate-y-2 bg-white/70" />
		</div>
	);
};

export default HeadTittle;
