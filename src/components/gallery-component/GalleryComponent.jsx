import React, { useState } from 'react';

import './GalleryComponent.css';

const CHEVRON_LEFT_SRC = 'https://icons.deanishe.net/icon/material/444/arrow-back/256.png';
const CHEVRON_RIGHT_SRC = 'https://icons.deanishe.net/icon/material/444/arrow-right/256.png';

export default ({ items = [] }) => {
    const [currentSlideId, setCurrentSlideId] = useState(0);

    return (
        <div className="gallery">
            <GallerySlidesComponent slides={items} currentSlideId={currentSlideId} />
            <GalleryArrowsComponent slideLength={items.length} currentSlideId={currentSlideId} setSlideId={setCurrentSlideId} />
            <GalleryBottomControlsComponent slideLength={items.length} setSlideId={setCurrentSlideId} />
        </div>
    )
};

const GallerySlidesItemComponent = ({ isActive, ..._ }) => {
    return (
        <div className={`gallery_slides-slide${isActive ? ' active' : ''}`}>
            <img src={_.src} />
        </div>
    );
};

const GallerySlidesComponent = ({ slides, currentSlideId }) => {
    return (
        <div className="gallery_slides">
            {slides.map((_, slideId) => <GallerySlidesItemComponent key={slideId} isActive={currentSlideId === slideId} {..._} />)}
        </div>
    )
};

const GalleryArrowsComponent = ({ setSlideId, currentSlideId, slideLength }) => {
    const updateSlide = (isNext = false) => {
        if (isNext) {
            if (currentSlideId + 1 < slideLength) {
                setSlideId(currentSlideId + 1);
            }
        } else {
            if (currentSlideId - 1 >= 0) {
                setSlideId(currentSlideId - 1);
            }
        }
    };

    return (
        <div className="gellery_arrows">
            <div className="gellery_arrows-arrow" onClick={() => updateSlide()}>
                <img src={CHEVRON_LEFT_SRC} />
            </div>
            <div className="gellery_arrows-arrow" onClick={() => updateSlide(true)}>
                <img src={CHEVRON_RIGHT_SRC} />
            </div>
        </div>
    );
};

const GalleryBottomControlsComponent = ({ setSlideId, slideLength }) => {
    return (
        <div className="gallery_bottom-controls">
            {new Array(slideLength).fill(null)
                .map((_, slideId) => <div key={slideId} className="gallery_bottom-controls-control" onClick={() => setSlideId(slideId)} />)
            }
        </div>
    );
};

