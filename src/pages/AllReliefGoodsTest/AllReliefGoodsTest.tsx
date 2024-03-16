/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
// import cardImg1 from "../../assets/cardImg1.jpg";
// import cardImg2 from "../../assets/cardImg2.jpg";
// import cardImg3 from "../../assets/cardImg3.jpg";
// import cardImg4 from "../../assets/cardImg4.jpg";
// import cardImg5 from "../../assets/cardImg5.jpg";

import { Button } from "../../Components/ui/button";
import Container from "../../Components/ui/Container";
import ReliefTest from "./ReliefTest";
import { useGetAllReliefGoodsQuery } from "../../redux/api/allReliefGoodsApi";



// const reliefData = [
  
//     {
//       "_id":" 1",
//       "title": "Bottled Water",
//       "image": 'https://i.ibb.co/1zp9XtG/cardImg5.jpg',
//       "unit": "liters",
//       "quantity":5000,
//       "category": "Food Supplies",
//       "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
//       "expiry_date": "2024-12-31"
//     },
//     {
//       "_id": "2",
//       "title": "Canned Food",
//       "image": "https://i.ibb.co/Zf5JtrC/cardImg7.jpg",
//       "unit": "units",
//       "quantity": 10000,
//       "category": "Shelter Kits",
//       "amount": "1 piece",
//       "description": "Warm and comfortable blanket suitable for all ages. Provides insulation against cold weather.",
//       "expiry_date": "N/A"
//     },
//     {
//       "_id":" 3",
//       "title": "Blankets",
//       "image": cardImg3,
//       "unit": "units",
//       "quantity": 2000,
//       "category": "Food Supplies",
//       "amount": "1 gallon",
//       "description": "Purified drinking water in convenient bottles. Essential for hydration and cooking.",
//       "expiry_date": "2025-06-30"
//     },
//     {
//       "_id":" 4",
//       "title": "First Aid Kits",
//       "image": cardImg4,
//       "unit": "kits",
//       "quantity": 500,
//       "category": "Clothing",
//       "amount": "10 kg",
//       "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
//       "expiry_date": "2024-12-31"
//     },
//     {
//       "_id":"5",
//       "title": "Flashlights",
//       "image": cardImg5,
//       "unit": "units",
//       "quantity": 1000,
//       "category": "Clothing",
//       "amount": "1 gallon",
//       "description": "Purified drinking water in convenient bottles. Essential for hydration and cooking.",
//       "expiry_date": "2025-06-30"
//     },
//     {
//       "_id":"6",
//       "title": "Battery Packs",
//       "image": cardImg1,
//       "unit": "units",
//       "quantity": 300,
//       "category": "Shelter Kits",
//       "amount": "10 kg",
//       "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
//       "expiry_date": "2024-12-31"
//     },
//     {
//       "_id":"7",
//       "title": "Hygiene Kits",
//       "image": cardImg2,
//       "unit": "kits",
//       "quantity": 1500,
//       "category": "Clothing",
//       "amount": "1 kit",
//       "description": "Comprehensive first aid kit containing essential supplies for treating minor injuries and ailments.",
//       "expiry_date": "2024-09-30"
//     },
//     {
//       "_id":"8",
//       "title": "Tents",
//       "image": cardImg3,
//       "unit": "units",
//       "quantity": 100,
//       "category": "Food Supplies",
//       "amount": "10 kg",
//       "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
//       "expiry_date": "2024-12-31"
//     },
//     {
//       "_id": "9",
//       "title": "Portable Stoves",
//       "image": cardImg4,
//       "unit": "units",
//       "category": "Shelter Kits",
//       "quantity": 200,
//       "amount": "1 kit",
//       "description": "Kit containing soap, toothpaste, toothbrush, sanitary napkins, and other hygiene essentials.",
//       "expiry_date": "N/A"
      
     
//     }
//     // {
//     //   "_id": "10",
//     //   "title": "Baby Formula",
//     //   "image":cardImg5,
//     //   "unit": "units",
//     //   "quantity": 500,
//     //   "category": "water",
    
//     // }
  
  
  
//   ]
  

const AllReliefGoodsTest = () => {


  const [reliefData1] = useState(undefined);

  const { data} =
    useGetAllReliefGoodsQuery(reliefData1);

  // console.log(
  //   "isLoading ========>",
  //   isLoading,
  //   "isFetching ========>",
  //   isFetching
  // );

 
  // const [dispatch, { data: data1, isLoading: isLoading1, isFetching: isFetching1 }] =
  //   usePostReliefGoodsMutation();

  // const handleSubmit = () => {
  //   const info = {
  //     name: "test",
  //     description: "test",
  //   };
  //   dispatch(info);
  // };

console.log(data)








    return (
        <Container>
        <div>
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
           {data?.map((relief:any) =>
              <ReliefTest
                  key={relief._id}
                  relief={relief}
                  
                  ></ReliefTest>)
                } 
  
          </div>
              <div className=" flex justify-center items-center m-5">
              <Button className="mt-5 bg-cyan-700 mx-auto">View All Relief Goods</Button>
              </div>
        </div>
      </Container>
    );
};

export default AllReliefGoodsTest;