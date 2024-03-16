/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "../../../Components/ui/button";
import Container from "../../../Components/ui/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../Components/ui/card";
import { Check } from "lucide-react";
// import { useAppDispatch } from "../../../redux/features/hooks"
// import { addToCart } from "../../../redux/features/CartSlice";
import { useState } from "react";
import Modal from "../../../pages/AllReliefGoodsTest/Modal";


interface Relief {
  _id: string;
  name: string;
  price: number;
  title :string;
  email: string;
  details: string;
  image: string;
  item:  string,
  unit: string,
  quantity: number,
  ratings: number,
     
      
}

interface ReliefProps {
 relief: Relief;
}


const Relief: React.FC<ReliefProps>  = ({relief} ) => {
const { image, title,quantity, unit} = relief;


const [showModal,setShowModal] = useState(false);

const [selectedRelief,setSelectedRelief] = useState(null)

const handleShowModal = (relief:any) => {
  setSelectedRelief(relief)
  setShowModal(true)
}

const handleCloseModal = () => {

  setSelectedRelief(null)
  setShowModal(false)
}


// const handleViewDetails = ()=> {
//     console.log("clicked")
// }


    return (
        <Container>
          {
            showModal && (
              <Modal 
              relief={selectedRelief}
              onclose={handleCloseModal}
              handleViewDetails={() => {}}

              />
            )
          }
    
    
       <Card className="w-[350px] bg-violet-50 mt-10">
          <img src={image} alt="" />
          <CardHeader>
            <CardTitle>{title} </CardTitle>
            <CardDescription>
              <div className="text-left flex items-center pl-5 pt-8">
                <Check className="bg-white text-green-400 rounded-full p-1"></Check>
                <p className="pl-5 text-black">{title}</p>
              </div>
              <div className="text-left flex items-center pl-5 pt-2">
                <Check className=" bg-white p-1 text-green-400 rounded-full "></Check>
                <p className="pl-5 text-black">{quantity}</p>
              </div>
              <div className="text-left flex items-center pl-5 pt-2">
                <Check className="bg-white p-1 text-green-400 rounded-full"></Check>
  
                <p className="pl-5 text-black">{unit}</p>
              </div>
              {/* <div className="text-left flex items-center pl-5 pt-2">
                <Check className="bg-white p-1 text-green-400 rounded-full"></Check>
                <p className="pl-5 text-black">Front Seat</p>
              </div>
              <div className="text-left flex items-center pl-5 pt-2">
                <Check className="bg-white p-1 text-green-400 rounded-full"></Check>
                <p className="pl-5 text-black">One day pas access all lecture</p>
              </div> */}

              {/* <div className="text-center">
              <Button
              onClick={handleAddToCart(relief)}
              
              className="mt-5 bg-cyan-700">Add </Button>
              </div> */}
              <div className="text-center">
              <Button onClick={()=>handleShowModal(relief)}
              className="mt-5 bg-cyan-700">View Details</Button>
              </div>

            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
   
      </Container>

    );
};

export default Relief;