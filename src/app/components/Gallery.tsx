'use client'

import { Card, CardContent } from "@mui/material";
import ImageGallery from "react-image-gallery";
import { ImagesProps } from "../types";

const Gallery = ({ images }: { images: ImagesProps }) => {

    const imagesList = images.data.map((image) => ({ original: image.attributes.url, thumbnail: image.attributes.url} ))

    return (
        <Card >
            <CardContent>
                <ImageGallery items={imagesList} thumbnailPosition="left"/>

            </CardContent>
        </Card>
    );
};

export default Gallery;