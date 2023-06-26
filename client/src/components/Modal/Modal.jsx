import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import * as React from "react";
import { GrClose } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
export default function Modal({ btnText, data }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box textAlign="center" marginTop={5}>
        <Button variant="contained" onClick={handleClickOpen}>
          {btnText}
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <Box textAlign="end">
          {" "}
          <Button onClick={handleClose} autoFocus>
            <GrClose size={25} />
          </Button>
        </Box>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
