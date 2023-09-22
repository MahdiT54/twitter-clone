import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function SignupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  return (
    <>
      <button
        className="bg-white text-black
                w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]
                "
                onClick={handleOpen}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={handleClose}
        className="flex justify-center item-center"
      >
        <div className="w-[400px] h-[200px] bg-white">Sign up over here</div>
      </Modal>
    </>
  );
}
