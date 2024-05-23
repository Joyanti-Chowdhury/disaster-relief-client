/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Container from "../../../Components/ui/Container";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../../../Components/ui/card";

// import cardImg1 from "../../../assets/cardImg1.jpg";
// import cardImg2 from "../../../assets/cardImg2.jpg";
// import cardImg3 from "../../../assets/cardImg3.jpg";
// import cardImg4 from "../../../assets/cardImg4.jpg";
// import cardImg5 from "../../../assets/cardImg5.jpg";
import Relief  from "./Relief";
import { Button } from "../../../Components/ui/button";
import { useState } from "react";
import { useGetAllReliefGoodsQuery, usePostReliefGoodsMutation } from "../../../redux/api/allReliefGoodsApi";

// interface Relief  {
//   id:number
//   _id: string;
//   title: string;
//   unit: string;
//   image: string;
//   quantity: number;
  
// }

// interface ReliefProps {
//   relief: Relief;
// }


// const reliefData = [
  
//   {
//     "_id":" 1",
//     "title": "Bottled Water",
//     "image": cardImg1,
//     "unit": "liters",
//     "quantity":5000,
//     "category": "Food Supplies",
//     "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
//     "expiry_date": "2024-12-31"
//   },
//   {
//     "_id": "2",
//     "title": "Canned Food",
//     "image": cardImg2,
//     "unit": "units",
//     "quantity": 10000,
//     "category": "Shelter Kits",
//     "amount": "1 piece",
//     "description": "Warm and comfortable blanket suitable for all ages. Provides insulation against cold weather.",
//     "expiry_date": "N/A"
//   },
//   {
//     "_id":" 3",
//     "title": "Blankets",
//     "image": cardImg3,
//     "unit": "units",
//     "quantity": 2000,
//     "category": "Food Supplies",
//     "amount": "1 gallon",
//     "description": "Purified drinking water in convenient bottles. Essential for hydration and cooking.",
//     "expiry_date": "2025-06-30"
//   },
//   {
//     "_id":" 4",
//     "title": "First Aid Kits",
//     "image": cardImg4,
//     "unit": "kits",
//     "quantity": 500,
//     "category": "Clothing",
//     "amount": "10 kg",
//     "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
//     "expiry_date": "2024-12-31"
//   },
//   {
//     "_id":"5",
//     "title": "Flashlights",
//     "image": cardImg5,
//     "unit": "units",
//     "quantity": 1000,
//     "category": "Clothing",
//     "amount": "1 gallon",
//     "description": "Purified drinking water in convenient bottles. Essential for hydration and cooking.",
//     "expiry_date": "2025-06-30"
//   },
//   {
//     "_id":"6",
//     "title": "Battery Packs",
//     "image": cardImg1,
//     "unit": "units",
//     "quantity": 300,
//     "category": "Shelter Kits",
//     "amount": "10 kg",
//     "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
//     "expiry_date": "2024-12-31"
//   },
//   {
//     "_id":"7",
//     "title": "Hygiene Kits",
//     "image": cardImg2,
//     "unit": "kits",
//     "quantity": 1500,
//     "category": "Clothing",
//     "amount": "1 kit",
//     "description": "Comprehensive first aid kit containing essential supplies for treating minor injuries and ailments.",
//     "expiry_date": "2024-09-30"
//   },
//   {
//     "_id":"8",
//     "title": "Tents",
//     "image": cardImg3,
//     "unit": "units",
//     "quantity": 100,
//     "category": "Food Supplies",
//     "amount": "10 kg",
//     "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
//     "expiry_date": "2024-12-31"
//   },
//   {
//     "_id": "9",
//     "title": "Portable Stoves",
//     "image": cardImg4,
//     "unit": "units",
//     "category": "Shelter Kits",
//     "quantity": 200,
//     "amount": "1 kit",
//     "description": "Kit containing soap, toothpaste, toothbrush, sanitary napkins, and other hygiene essentials.",
//     "expiry_date": "N/A"
    
   
//   }
//   // {
//   //   "_id": "10",
//   //   "title": "Baby Formula",
//   //   "image":cardImg5,
//   //   "unit": "units",
//   //   "quantity": 500,
//   //   "category": "water",
  
//   // }



// ]










const AllRelief = () => {


  
  const [reliefData1] = useState(undefined);

  const { data} =
    useGetAllReliefGoodsQuery(reliefData1);
    // setReliefData1();
    

   
  // console.log(
  //   "isLoading ========>",
  //   isLoading,
  //   "isFetching ========>",
  //   isFetching
  // );

  // const [ {  isLoading: isLoading1 , isFetching: isFetching1 }] =
  //   usePostReliefGoodsMutation();

    const [, {isLoading: isLoading1 }] =  usePostReliefGoodsMutation();





 
     if(isLoading1){
      return <h1>Loading....</h1>
     }

    //  if(isFetching1){
    //   return <h1>Fetching....</h1>
    //  }
  // const handleSubmit = () => {
  //   const info = {
  //     name: "test",
  //     description: "test",
  //   };
  //   dispatch(info);
  // };

// console.log(data)


// const setReliefData1: React.Dispatch<React.SetStateAction<undefined>> = (setReliefData1) => {
//   setReliefData1(undefined);
// }
      
  return (
    <Container className="m-16 ">
  
      <div className="mt-20">
        <h1 className="mt-16 text-5xl text-center font-bold text-cyan-400">
          All Relief Goods
        </h1>
        <p className="mt-5 text-gray-500 text-center  ">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra.<br></br>
          Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* services */}
         {data?.slice(0,6).map((relief:any) =>
            <Relief
                key={relief._id}
                relief={relief}
                
                ></Relief>)
              } 




          {/* {
                data.map((title)=> ( 
                <h1>{title.name}</h1>
                
                ))
                  
              
              } */}

          {/*     
             {data?.slice(3).map((service:Service) => <ServiceCard
                key={service._id}
                service={service}
                
                ></ServiceCard>) 
    
    
              } */}
{/* 
          <Card className="w-[350px] bg-violet-50 mt-10">
            <img src={cardImg1} alt="" />
            <CardHeader>
              <CardTitle>Corporate event </CardTitle>
              <CardDescription>
                <div className="text-left flex titles-center pl-5 pt-8">
                  <Check className="bg-white text-green-400 rounded-full p-1"></Check>
                  <p>One day pas access all lecture</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className=" bg-white p-1 text-green-400 rounded-full "></Check>
                  <p>Lunch and Snack</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className="bg-white p-1 text-green-400 rounded-full"></Check>

                  <p>Meet Event Speaker</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className="bg-white p-1 text-green-400 rounded-full"></Check>
                  <p>Front Seat</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className="bg-white p-1 text-green-400 rounded-full"></Check>
                  <p>One day pas access all lecture</p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <Card className="w-[350px] mt-10 bg-violet-100">
            <img src={cardImg2} alt="" />
            <CardHeader>
              <CardTitle>Corporate event </CardTitle>
              <CardDescription>
                <div className="text-left flex titles-center pl-5 pt-8">
                  <Check className="bg-white p-1 text-green-400 rounded-full"></Check>
                  <p>One day pas access all lecture</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className=" bg-white p-1 text-green-400 rounded-full "></Check>
                  <p>Lunch and Snack</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className="bg-white p-1 text-green-400 rounded-full"></Check>

                  <p>Meet Event Speaker</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className="bg-white p-1 text-green-400 rounded-full"></Check>
                  <p>Front Seat</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className="bg-white p-1 text-green-400 rounded-full"></Check>
                  <p>One day pas access all lecture</p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <Card className="w-[350px] mt-10 bg-violet-200">
            <img src={cardImg3} alt="" />
            <CardHeader>
              <CardTitle>Corporate event </CardTitle>
              <CardDescription>
                <div className="text-left flex titles-center pl-5 pt-8">
                  <Check className="bg-white p-1 text-green-400 rounded-full "></Check>
                  <p>One day pas access all lecture</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className=" bg-white p-1 text-green-400 rounded-full "></Check>
                  <p>Lunch and Snack</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className="bg-white p-1 text-green-400 rounded-full"></Check>

                  <p>Meet Event Speaker</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className="bg-white p-1 text-green-400 rounded-full"></Check>
                  <p>Front Seat</p>
                </div>
                <div className="text-left flex titles-center pl-5 pt-2">
                  <Check className="bg-white p-1 text-green-400 rounded-full"></Check>
                  <p>One day pas access all lecture</p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card> */}

        </div>
            <div className=" flex justify-center titles-center">
              <a href="/all-relief-goods">
              <Button  className="mt-5 bg-cyan-700 mx-auto w-full font-bold text-xl">View all</Button>
              </a>
            {/* <Button  className="mt-5 bg-cyan-700 mx-auto">View all</Button> */}
            </div>
      </div>
    </Container>
  );
};

export default AllRelief;
