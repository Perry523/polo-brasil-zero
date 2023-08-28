import React from "react";
interface VideoModalProps {
	handleCloseVideo: () => void;
	selectedVideoShow: string;
}
const VideoModal = ({
	handleCloseVideo,
	selectedVideoShow,
}: VideoModalProps) => {
	return (
		<div
			className="fixed w-screen h-screen top-0 left-0 bg-black/90 flex justify-center items-center z-[999]"
			onClick={handleCloseVideo}
		>
			<div className="xs:w-[320px] sm:w-[480px] md:w-[780px] xl:w-[1000px] xs:h-[192px] sm:h-[288px] md:h-[468px] xl:h-[600px] mx-auto bg-black">
				<iframe
					className="xs:w-[320px] sm:w-[480px] md:w-[780px] xl:w-[1000px] xs:h-[192px] sm:h-[288px] md:h-[468px] xl:h-[600px] mx-auto"
					src={`${selectedVideoShow}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			</div>
		</div>
	);
};

export default VideoModal;
