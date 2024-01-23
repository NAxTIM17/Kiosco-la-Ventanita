import './Purchases.css'
import { useEffect, useState } from "react"
import { Divider } from '@nextui-org/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faTrash, faSearch, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../Components/Card';
import { MyModal } from '../../Components/MyModal';

function Purchases (){

    const [ footer, setFooter ] = useState(false)
    const [ openModal, setOpenModal ] = useState(false)

    const handleFooter = () =>{
        if(openModal) return
        setFooter(!footer)
    }
    
    //<MyModal OpenModal={openModal} setOpenModal={setOpenModal} Accion={handleHola} btnAccionText={"Agregar"} btnCloseText={"Cerrar"} />

    return(
        <>
        <div className="purchases-container">
            <div className="purchase-header">
                <div className="search-container">
                    <FontAwesomeIcon className='icon-Search' icon={faSearch} />
                </div>
                <div className="filter-container">
                    <div className='filter'>

                    </div>
                    <div className='filter'>

                    </div>
                    <div className='filter'>

                    </div>
                </div>
            </div>
            <Divider className='divider'/>
            <div className="product-container">
                {
                    <>
                        <div className=''>

                        </div>
                    </>
                }
                <div className='products'>
                    <Card text={"Card-01"}/>
                    <Card text={"Card-02"}/>
                    <Card text={"Card-03"}/>
                    <Card text={"Card-04"}/>
                    <Card text={"Card-05"}/>
                    <Card text={"Card-06"}/>
                    <Card text={"Card-07"}/>
                    <Card text={"Card-08"}/>
                    <Card text={"Card-09"}/>
                    <Card text={"Card-10"}/>
                    <Card text={"Card-11"}/>
                    <Card text={"Card-12"}/>
                </div>
            </div>
            <div className={`purchase-footer-${footer ? "" : "hidden"}`} onClick={footer ? "" : handleFooter}>
                {
                    footer ? (
                        <>
                        <div className='footer-content'>
                            <div className='close-button' onClick={handleFooter}>

                            </div>
                        </div>
                        </>
                    ):
                    ""
                }

            </div>
        </div>

        </>
    )

}

export default Purchases