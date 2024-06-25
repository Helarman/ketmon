'use client'

import { Card, CardContent } from "@mui/material";
import ImageGallery from "react-image-gallery";
import { ImagesProps } from "../types";

const Gallery = ({ images }: { images: ImagesProps }) => {

    const imagesList = images.data.map((image) => ({ original: `http://localhost:1337${image.attributes.url}`, thumbnail: `http://localhost:1337${image.attributes.url}` }))

    return (
        <Card >
            <CardContent>
                <ImageGallery items={imagesList} thumbnailPosition="left"/>

            </CardContent>
        </Card>
    );
};

export default Gallery;