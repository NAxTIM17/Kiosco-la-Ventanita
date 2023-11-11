import { Link } from "react-router-dom"
import { Button } from "@nextui-org/react"


function MyButton(name, route){
    return(
        <>
        <Link to = {route}/>
        <Button className="navBar-button" color="primary" variant="shadow">HOla</Button>
        </>
    )
}

export default MyButton