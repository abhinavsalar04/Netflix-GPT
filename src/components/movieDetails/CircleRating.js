import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating, maxValue, isNumeric }) => {
    return (
        <div className="bg-[rgb(5,22,45)] rounded-[50%] p-[2px]">
            <CircularProgressbar
                value={rating}
                maxValue={maxValue}
                strokeWidth={10}
                text={isNumeric ? parseInt(rating) : rating.toFixed(1)}
                styles={buildStyles({
                    pathColor: rating < maxValue * 0.5 ? "red" : rating < maxValue * 0.7 ? "orange" : "green",
                   textSize: '34px',
                   stroke: `transparent`
                })}
            />
        </div>
    );
};

export default CircleRating;
