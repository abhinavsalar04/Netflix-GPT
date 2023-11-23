import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {

    return (
        <div className="bg-[rgb(5,22,45)] rounded-[50%] p-[2px]">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                strokeWidth={10}
                text={rating.toFixed(1)}
                styles={buildStyles({
                    pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                   textSize: '34px',
                   stroke: `transparent`
                })}
            />
        </div>
    );
};

export default CircleRating;
