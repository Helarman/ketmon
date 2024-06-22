'use client'

import ReactDOMServer from 'react-dom/server';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationOn } from '@mui/icons-material'; // Import Material-UI icon component
import L from 'leaflet';
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface MapProps {
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  },
}

const Map: React.FC<MapProps> = ({name, coordinates}) => {
  const position = [51.505, -0.09];

  const customIcon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(
      <LocationOn style={{ fontSize: 40, color: '#C40C0C' }} />
    ),
    iconAnchor: [20, 40],
  });

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <Card sx={{ m: 0, p: 0, }}>
      <CardContent sx={{ m: 0, p: 0, width: '100%' }}>
        <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} style={{ height: '50vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[coordinates.lat, coordinates.lng]} icon={customIcon}>
            <Popup>
              {name}
            </Popup>
          </Marker>
        </MapContainer>
        <Typography variant='h6' sx={{ mt: '20px', ml: '10px', display: 'flex' }}>
          <LocationOn style={{ fontSize: 40, color: '#C40C0C', marginRight: '10px' }} />  {name}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default Map;