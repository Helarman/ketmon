'use client'

import { Box, Button, Divider, Menu, MenuItem, ToggleButton, ToggleButtonGroup } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { ViewHeadline, ViewModule } from "@mui/icons-material";


const RealEstateDisplaySetting = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [display, setDisplay] = useState<string | null>('headline');

    const handleDisplay = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setDisplay(newAlignment);
    };
    return null;
    return (
        <Box width={'100%'} sx={{ mb: '20px' }}>
            <Box sx={{ py: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button
                    id="basic-button"
                    size='small'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{ color: 'black' }}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    По дате
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>По возврастанию цены</MenuItem>
                    <MenuItem onClick={handleClose}>По убыванию цены</MenuItem>
                    <MenuItem onClick={handleClose}>По рейтингу</MenuItem>
                </Menu>
                <ToggleButtonGroup
                    size="small"
                    value={display}
                    exclusive
                    onChange={handleDisplay}
                    aria-label="text alignment"
                >
                    <ToggleButton value="headline" aria-label="left aligned">
                        <ViewHeadline />
                    </ToggleButton>
                    <ToggleButton value="module" aria-label="centered">
                        <ViewModule />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Divider />
        </Box >
    )
};

export default RealEstateDisplaySetting ;