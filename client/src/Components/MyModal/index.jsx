import "./Modal.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { MyButton } from "../MyButton/Index.jsx";

export function MyModal({
  setSelectedId,
  children,
  btnCloseText,
  btnAccionText,
  selectedId,
}) {
  return (
    <>
      <motion.div className="modal-container">
        <motion.div layoutId={selectedId} className="modal">
          <motion.div className="modal-content">{children}</motion.div>
          <motion.div className="modal-buttons">
            <div className="buttons">
              <MyButton name={btnCloseText} onClick={() => setSelectedId(null)}/>
              <MyButton name={btnAccionText} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
