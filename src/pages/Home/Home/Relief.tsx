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
import { Bookmark,  Star } from "lucide-react";
// import { useAppDispatch } from "../../../redux/features/hooks"
// import { addToCart } from "../../../redux/features/CartSlice";
import { useState } from "react";
import Modal from "../../../pages/AllReliefGoodsTest/Modal";
// import bannerImg from "../../../assets/banner1.jpg";
// import gradientImg from "../../../assets/gradient.jpeg";
// import cardImg from "../../../assets/relief1.jpg"

// import cardImg1 from "../../../assets/relief17.jpg"

interface Relief {
  id:string
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
const { image, title} = relief;


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
    



    <div className="grid grid-cols-1 lg:grid-cols-3 m-5">
        <Card className="w-[350px] bg-sky-100 mt-10 shadow-lg shadow-sky-400 border border-spacing-2 border-slate-300 p-4 rounded-md">
          <img className="w-full rounded-md h-60" src={image} alt="" />
          <CardHeader>
            <CardTitle className="font-bold  text-2xl text-slate-500"> {title}</CardTitle>
            <CardDescription className="pt-8">
              <div className="flex items-center text-justify p-3 border rounded-md border-slate-300">
                <p className=" text-black "> <span className="text-xl font-semibold text-black">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Harum iste blanditiis quos consequatur doloribus, numquam fugit nostrum voluptate quisquam ipsam.</p>
              </div>
            <div className="flex justify-between p-3">
            <div className="text-left flex items-center pt-2">
                <p className=" text-black font-semibold text-2xl"> $600</p>
              </div>
              <div className="text-left flex items-center  pt-2">
                <p className=" text-black font-semibold text-2xl"> Cotton Tshirt</p>
              </div>
            </div>
            
 
              <div className="flex justify-between ml-3">
              <div className="flex justify-between mt-2">
                {/* <p>Review: 5.6</p> */}
               <Star></Star>
               <Star></Star>
               <Star></Star>
               <Star></Star>
                    
               </div>
               <div className="mt-3">
                <Bookmark></Bookmark>
               </div>
              </div>
            
           

              <div className="text-center">
              <Button onClick={()=>handleShowModal(relief)}
                className="mt-5 bg-cyan-700 font-bold text-2xl items-end w-full">View Details</Button>
              </div>

            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      
       
</div>
    
       {/* <Card className="w-[350px] bg-sky-100 mt-10 shadow-lg shadow-sky-400 border border-spacing-2 border-slate-300 p-4 rounded-md">
          <img className="w-full h-96" src={image} alt="" />
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
           
              <div className="text-center">
              <Button onClick={()=>handleShowModal(relief)}
              className="mt-5 bg-cyan-700">View Details</Button>
              </div>

            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card> */}
    
      </Container>

    );
};

export default Relief;