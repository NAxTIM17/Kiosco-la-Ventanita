import {Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody} from "@nextui-org/react";
import { useState } from "react";


export function Modals ({isOpen, onOpenChange, modalHeader, buttonAction, buttonClose, Action, size}){

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
                <>
                <ModalHeader className="flex flex-col gap-1">{modalHeader}</ModalHeader>
                <ModalBody>
                
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" variant="light" onPress={onClose}>
                    {buttonClose}
                    </Button>
                    <Button color="danger" onPress={Action}>
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