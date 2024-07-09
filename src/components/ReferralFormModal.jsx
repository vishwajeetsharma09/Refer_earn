// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography, Snackbar } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import axios from 'axios';
// import './ReferralFormModal.css';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// const ReferralFormModal = ({ handleClose }) => {
//   const [formData, setFormData] = useState({
//     referrerName: '',
//     referrerEmail: '',
//     refereeName: '',
//     refereeEmail: '',
//     message: '',
//   });

//   const [open, setOpen] = useState(false); // State to manage Snackbar visibility

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/referrals', formData);
//       console.log(response.data);
//       setOpen(true); // Show Snackbar on success
//       setFormData({
//         referrerName: '',
//         referrerEmail: '',
//         refereeName: '',
//         refereeEmail: '',
//         message: '',
//       });
//       handleClose();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSnackbarClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box className="modal-box">
//       <Typography variant="h6">Refer a Friend</Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           name="referrerName"
//           label="Your Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={formData.referrerName}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           name="referrerEmail"
//           label="Your Email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={formData.referrerEmail}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           name="refereeName"
//           label="Friend's Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={formData.refereeName}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           name="refereeEmail"
//           label="Friend's Email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={formData.refereeEmail}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           name="message"
//           label="Message"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={formData.message}
//           onChange={handleChange}
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>

//       <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackbarClose}>
//         <Alert onClose={handleSnackbarClose} severity="success">
//           Email sent successfully!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default ReferralFormModal;
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import './ReferralFormModal.css';

const ReferralFormModal = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    message: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to manage success message visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/referrals', formData);
      console.log(response.data);

      // Show success message
      setShowSuccessMessage(true);

      // Clear form data after successful submission
      setFormData({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
        message: '',
      });

      // Automatically close the success message after a few seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
        handleClose();
      }, 3000); // Adjust the timeout duration as needed
    } catch (error) {
      console.error('Error submitting referral:', error);
    }
  };

  return (
    <Box className="modal-box">
      <Typography variant="h6">Refer a Friend</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="referrerName"
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.referrerName}
          onChange={handleChange}
          required
        />
        <TextField
          name="referrerEmail"
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.referrerEmail}
          onChange={handleChange}
          required
        />
        <TextField
          name="refereeName"
          label="Friend's Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.refereeName}
          onChange={handleChange}
          required
        />
        <TextField
          name="refereeEmail"
          label="Friend's Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.refereeEmail}
          onChange={handleChange}
          required
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      {showSuccessMessage && (
        <Typography variant="body1" className="success-message">
          Referral submitted successfully!
        </Typography>
      )}
    </Box>
  );
};

export default ReferralFormModal;




