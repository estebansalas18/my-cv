import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, SetStateAction, forwardRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface ContactMeDialogProps {
  open: boolean;
  setContactMeDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ContactMeDialog = ({
  open,
  setContactMeDialogOpen,
}: ContactMeDialogProps) => {
  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={(event, reason) => {
        if (reason == "backdropClick") {
          setContactMeDialogOpen(false);
        }
      }}
    >
      <DialogTitle className="font-bold text-5xl text-center">
        ¿En serio me quieres contactar?
      </DialogTitle>
      <DialogContent>
        <div className="w-96 mx-auto">
          <img src="./images/wendy.gif" alt="GIF" className="mx-auto" />
        </div>
        <div className="flex text-2xl text-customPurpleLight justify-between px-20 py-5">
          <a
            href="https://wa.me/573044278880"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center">
              <FaWhatsapp></FaWhatsapp>
              <span className="pl-2">Siiii, hablemos</span>
            </span>
          </a>
          <button
            onClickCapture={() => {
              setContactMeDialogOpen(false);
            }}
          >
            <span>Cancelar</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactMeDialog;
