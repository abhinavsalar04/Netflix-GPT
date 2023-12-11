import React from "react";
import { useSelector } from "react-redux";

import "./cast_style.css";

import { IMAGES_BASE_URL } from "../../utils/constants";


const Cast = () => {
    const selectedMovieCredits = useSelector((store) => store.movies.selectedMovieCredits);
    if (!selectedMovieCredits) return;
    const { cast } = selectedMovieCredits;
    return (
        <div className="castSection">
            <div>
                <div className="listItems">
                    {
                        cast?.map((item) => {
                            const { profile_path, name, character } = item;
                            return (
                                <div key={item.id} className="listItem">
                                    <div className="profileImg">
                                        <img className="img" src={IMAGES_BASE_URL + profile_path} alt="" />
                                    </div>
                                    <div className="name">{name}</div>
                                    <div className="character">{character}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Cast;