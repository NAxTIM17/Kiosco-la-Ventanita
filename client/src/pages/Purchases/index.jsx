import "./Purchases.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Divider } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../../Components/Card";
import { MyModal } from "../../Components/MyModal";

function Purchases() {
  const [footer, setFooter] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleFooter = () => {
    if (selectedId) return;
    setFooter(!footer);
  };
  const items = [
    {
      title: "Card01",
      price: "$3000",
    },
    {
      title: "Card02",
      price: "$4000",
    },
    {
      title: "Card02",
      price: "$4000",
    },
    {
      title: "Card02",
      price: "$4000",
    },
    {
      title: "Card02",
      price: "$4000",
    },
    {
      title: "Card02",
      price: "$4000",
    },
    {
      title: "Card02",
      price: "$4000",
    },
    {
      title: "Card02",
      price: "$4000",
    },
    {
      title: "Card02",
      price: "$4000",
    },

  ];

  
  return (
    <>
      <div className="purchases-container">
            <AnimatePresence>
                {
                    selectedId && (
                        <MyModal selectedId={selectedId} setSelectedId={setSelectedId} btnAccionText={"Aceptar"} btnCloseText={"Cerrar"}/>
                    )
                }
            </AnimatePresence>
        <div className="purchase-header">
          <div className="search-container">
            <FontAwesomeIcon className="icon-Search" icon={faSearch} />
          </div>
          <div className="filter-container">
            <div className="filter"></div>
            <div className="filter"></div>
            <div className="filter"></div>
          </div>
        </div>
        <Divider className="divider" />
        <div className="product-container">
          {
            <>
              <div className=""></div>
            </>
          }
          <div className="products">
            {items.map((item, key) => (
              <Card
                itemId={key + 1}
                onClick={() => setSelectedId(key + 1)}
                text={item.title}
              />
            ))}
            
          </div>
        </div>
        <div
          className={`purchase-footer-${footer ? "" : "hidden"}`}
          onClick={footer ? "" : handleFooter}
        >
          {footer ? (
            <>
              <div className="footer-content">
                <div className="close-button" onClick={handleFooter}></div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Purchases;
