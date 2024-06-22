'use client'

import { useEffect, useState } from "react";
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactElement;
}


const ModalWindow: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {

  if (!isOpen) {
    return null;
  }

  
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      disableEnforceFocus
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: 'none',
        borderRadius: '20px',
        boxShadow: 24,
        px: 3,
        py: 3
      }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {children}
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalWindow;