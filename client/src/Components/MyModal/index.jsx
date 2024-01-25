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
          <motion.div className="modal-content">
            <div className="modal-photo">
              <img
                className="photo"
                src="https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp"
                alt=""
              />
              <div className="increment">

              </div>
            </div>
            <div className="modal-body">
              <div className="modal-details">
                <h1>TITLE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, pariatur, rerum culpa fugit ipsum rem sunt dolorum
                  animi officia iure consequatur delectus dolores explicabo nam.
                  Exercitationem quod perferendis repellat suscipit!
                </p>
              </div>
              <motion.div className="modal-buttons">
                <div className="buttons">
                  <MyButton
                    name={btnCloseText}
                    onClick={() => setSelectedId(null)}
                  />
                  <MyButton name={btnAccionText} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
