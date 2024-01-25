import "./Modal.css";
import { useState } from "react";
import { motion } from "framer-motion";

export function MyModal({
  setSelectedId,
  children,
  btnCloseText,
  btnAccionText,
  selectedId
}) {
  return (
    <>
      <motion.div className="modal-container">
        <motion.div layoutId={selectedId} className="modal">
          <motion.div className="modal-content">{children}</motion.div>
          <motion.div className="modal-buttons">
            <motion.div className="btn-accion" onClick={""}>
              <motion.h2>{btnAccionText}</motion.h2>
            </motion.div>
            <motion.div
              className="btn-close"
              onClick={() => setSelectedId(null)}
            >
              <motion.h2>{btnCloseText}</motion.h2>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
