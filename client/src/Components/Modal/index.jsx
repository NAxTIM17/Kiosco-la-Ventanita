import {Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody} from "@nextui-org/react";
import { useState } from "react";


export function Modals ({isOpen, onOpenChange, modalHeader, buttonAction, buttonActionColor,buttonClose, Action, size}){

    const [scroll, setScroll] = useState("inside")


    return(
        <>
            <Modal
                backdrop="blur" 
                isOpen={isOpen} 
                onOpenChange={onOpenChange} 
                size={size}
                scrollBehavior= {scroll}
                >
                <ModalContent>
                {(onClose) => (
                    console.log(`soy el onClose ${onClose}`),
                <>
                <ModalHeader className="flex flex-col gap-1">{modalHeader}</ModalHeader>
                <ModalBody>
                
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" variant="light" onPress={onClose}>
                    {buttonClose}
                    </Button>
                    <Button className="text-white" color={buttonActionColor} onClick={() => {
                        Action()
                        setTimeout(()=>[
                            onClose()
                        ],200)
                    }}>
                    {buttonAction}
                    </Button>
                </ModalFooter>
                </>
            )}
                </ModalContent>
          </Modal>
        </>
    )
}