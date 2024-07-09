// src/components/ReferNowButton.jsx
import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import ReferralFormModal from './ReferralFormModal';

const ReferNowButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ReferralFormModal handleClose={handleClose} />
      </Modal>
    </>
  );
};

export default ReferNowButton;

