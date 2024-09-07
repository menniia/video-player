import React from "react";

const Video = ({ src }) => {
    return (
        <div>
            <video controls autoPlay muted src={src}></video>
        </div>
    )
}

export default Video;