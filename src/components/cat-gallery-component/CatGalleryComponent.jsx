import React, { useState, useLayoutEffect } from 'react';

import GalleryComponent from '../gallery-component/GalleryComponent';

import ApiService from '../../services/ApiService';

const CatGalleryComponent = () => {
    const [catsData, setCatsData] = useState([]);
    const [fetchDataError, setFetchDataError] = useState(false);

    useLayoutEffect(() => {
        ApiService.getCatsData().then(data => {
            setCatsData(data);
        }).catch(err => setFetchDataError(true));
    }, []);
 
    if (fetchDataError) {
        return <p>Error while try to fetch cats data</p>;
    } else if (!fetchDataError && !catsData) {
        return <p>Data loading..</p>;
    } else if (catsData) {
        return <GalleryComponent items={catsData.cats} />;
    }
};

export default CatGalleryComponent;
