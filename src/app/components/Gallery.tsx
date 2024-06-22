'use client'

import { Card, CardContent } from "@mui/material";
import ImageGallery from "react-image-gallery";

const Gallery = () => {

    const images = [
        { original: 'https://source.unsplash.com/featured/?livingroom', thumbnail: 'https://source.unsplash.com/featured/?livingroom' },
        { original: 'https://source.unsplash.com/featured/?kitchen', thumbnail: 'https://source.unsplash.com/featured/?kitchen' },
        { original: 'https://source.unsplash.com/featured/?bedroom', thumbnail: 'https://source.unsplash.com/featured/?bedroom' },
        { original: 'https://source.unsplash.com/featured/?bathroom', thumbnail: 'https://source.unsplash.com/featured/?bathroom' },
        { original: 'https://source.unsplash.com/featured/?homeoffice', thumbnail: 'https://source.unsplash.com/featured/?homeoffice' },
        { original: 'https://source.unsplash.com/featured/?balcony', thumbnail: 'https://source.unsplash.com/featured/?balcony' },
        { original: 'https://source.unsplash.com/featured/?apartmentwindow', thumbnail: 'https://source.unsplash.com/featured/?apartmentwindow' },
        { original: 'https://source.unsplash.com/featured/?diningarea', thumbnail: 'https://source.unsplash.com/featured/?diningarea' },
        { original: 'https://source.unsplash.com/featured/?furniture', thumbnail: 'https://source.unsplash.com/featured/?furniture' },
        { original: 'https://source.unsplash.com/featured/?homeinterior', thumbnail: 'https://source.unsplash.com/featured/?homeinterior' },
        { original: 'https://source.unsplash.com/featured/?home', thumbnail: 'https://source.unsplash.com/featured/?home' },
        { original: 'https://source.unsplash.com/featured/?modernapartment', thumbnail: 'https://source.unsplash.com/featured/?modernapartment' },
        { original: 'https://source.unsplash.com/featured/?cityviewapartment', thumbnail: 'https://source.unsplash.com/featured/?cityviewapartment' },
        { original: 'https://source.unsplash.com/featured/?apartment', thumbnail: 'https://source.unsplash.com/featured/?apartment' },
        { original: 'https://source.unsplash.com/featured/?realestate', thumbnail: 'https://source.unsplash.com/featured/?realestate' },
    ];

    return (
        <Card >
            <CardContent>
                <ImageGallery items={images} />
            </CardContent>
        </Card>
    );
};

export default Gallery;