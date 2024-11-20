import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const totalItems = Math.min(data.length, 6);
    const items = data
        .slice(0, totalItems)
        .map((item, index) => <HomeSectionCard product={item} key={index} />);
    const slidePrev = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    };
    const slideNext = () => {
        if (activeIndex < totalItems - responsive[1024].items) {
            setActiveIndex(activeIndex + 1);
        }
    };
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className="relative border">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">
                {sectionName}
            </h2>
            <div className="relative p-5">
                <AliceCarousel
                    disableButtonsControls
                    disableDotsControls
                    items={items}
                    responsive={responsive}
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
            </div>
            {activeIndex < totalItems - responsive[1024].items && (
                <Button
                    variant="contained"
                    className="z-50 bg-white"
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        right: "0rem",
                        bgcolor: "white",
                        transform: "translateX(50%) rotate(90deg)",
                    }}
                    aria-label="next"
                    onClick={slideNext}
                >
                    <KeyboardArrowLeftIcon
                        sx={{ transform: "rotate(90deg)", color: "black" }}
                    />
                </Button>
            )}
            {activeIndex > 0 && (
                <Button
                    variant="contained"
                    onClick={slidePrev}
                    className="z-50"
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        left: "0",
                        bgcolor: "white",
                        transform: "translateX(-50%) rotate(90deg)",
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon
                        sx={{ transform: "rotate(-90deg)", color: "black" }}
                    />
                </Button>
            )}
        </div>
    );
};

export default HomeSectionCarousel;
