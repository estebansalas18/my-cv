import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, SetStateAction, forwardRef } from "react";
import { FaGithub } from "react-icons/fa";

interface AhorrAppDialogProps {
  open: boolean;
  setAhorrAppDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AhorrAppDialog = ({
  open,
  setAhorrAppDialogOpen,
}: AhorrAppDialogProps) => {
  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={(event, reason) => {
        if (reason == "backdropClick") {
          setAhorrAppDialogOpen(false);
        }
      }}
    >
      <DialogTitle
        className="text-customPurple text-center"
        style={{ fontWeight: "bold", fontSize: "3.75rem", lineHeight: "1" }}
      >
        AhorrApp
      </DialogTitle>
      <DialogContent>
        <div className="flex justify-between text-lg mx-auto items-center">
          <span className="">
            AhorrApp es una aplicación móvil que revolucionará las compras en
            supermercados y tiendas. Con ella, los usuarios pueden personalizar
            sus listas de compras y comparar precios en diferentes
            establecimientos. La aplicación simplifica la experiencia de compra,
            ahorrando tiempo y dinero a sus usuarios. En resumen, AhorrApp es
            una aplicación para comprar más y gastar menos.
          </span>
          <img
            src="./images/ahorrapp-cel.jpg"
            alt="GIF"
            className="w-80 mx-auto"
          />
        </div>
        <a
          href="https://github.com/cbasguti/ahorra_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-2xl text-customPurpleLight flex items-center justify-center">
            <FaGithub></FaGithub>
            <span className="pl-2">Ir al repositorio</span>
          </span>
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default AhorrAppDialog;
