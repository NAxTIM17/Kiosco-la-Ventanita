import "./Home.css"
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


function Home(){
    return(
        <>
            <div className="Container-Home">
                <div className="Container-Home-01">
                        <div className="Container-Home-sub01">
                        <Card className="py-4">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                                <small className="text-default-500">12 Tracks</small>
                                <h4 className="font-bold text-large">Frontend Radio</h4>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://cdn.pixabay.com/photo/2023/11/04/07/57/owl-8364426_1280.jpg"
                                width={270}
                                />
                            </CardBody>
                        </Card>
                        </div>
                        <div className="Container-Home-sub02">

                        </div>
                </div>
                <div className="Container-Home-02">

                </div>
            </div>
        </>
    )
}

export default Home