/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../../Components/ui/Container"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../Components/ui/table"


// import cardImg1 from "../../assets/cardImg1.jpg";
// import cardImg2 from "../../assets/cardImg2.jpg";
// import cardImg3 from "../../assets/cardImg3.jpg";
// import cardImg4 from "../../assets/cardImg4.jpg";
// import cardImg5 from "../../assets/cardImg5.jpg";
import { Button } from "../../Components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
// import { useAppDispatch } from '../../redux/features/hooks';
// import { removeFromCart } from "../../redux/features/CartSlice";
import { useGetAllReliefGoodsQuery } from "@/redux/api/allReliefGoodsApi";
import { useState } from "react";

// type TReliefData = {
//        id: string,
//        _id:string,
//       title: string,
//       image: string,
//       unit: string
//       quantity: number
//       ratings: number,

// }

//   const reliefData = [
  
//     {
//      "_id":"124e13b9-2d54-4b2f-a74d-a77b362d6ead",
//       "title": "Bottled Water",
//       "image": cardImg1,
//       "unit": "liters",
//       "Amount": 5000,
//       "category": "water",
//       "ratings": 5,
//     },
//     {
//        "_id": "2",
//       "title": "Canned Food",
//       "image": cardImg2,
//       "unit": "units",
//       "quantity": 10000,
//       "ratings": 5,
//     },
//     {
//       "_id":" 3",
//       "title": "Blankets",
//       "image": cardImg3,
//       "unit": "units",
//       "quantity": 2000,
//       "ratings": 5,
//     },
//     {
//       "_id":" 4",
//       "title": "First Aid Kits",
//       "image": cardImg4,
//      "unit": "kits",
//       "quantity": 500,
//       "ratings": 4.5,
//     },
//     {
//       "_id":"5",
//       "title": "Flashlights",
//       "image": cardImg5,
//       "unit": "units",
//       "quantity": 1000,
//       "ratings": 4,
//     },
//     {
//       "_id":"6",
//       "title" :"Battery Packs",
//       "image": cardImg1,
//       "unit": "units",
//       "quantity": 300,
//       "ratings": 5,
//     },
//     {
//       "_id":"7",
//       "title": "Hygiene Kits",
//       "image": cardImg2,
//       "unit": "kits",
//       "quantity": 1500,
//       "ratings": 5,
//     },
//     {
//       "_id":"8",     
//       "title": "Tents",
//       "image": cardImg3,
//       "unit": "units",
//       "quantity": 100,
//       "ratings": 4.5,
//     },
//     {
//       "_id": "9",
//       "title":" Portable Stoves",
//       "image": cardImg4,
//       "unit": "units",
//       "quantity": 200,
//       "ratings": 5,
//     },
//     {
//       "_id": "10",
//       "title": "Baby Formula",
//       "image":cardImg5,
//       "unit": "units",
//       "quantity": 500,
//       "ratings": 5,
//     }
  
  

// ]



// const CartDetails = ({relief} : any) => {
//   const dispatch = useAppDispatch();
//   const handleQuantity = (type:string, id:string) => {
//     const payload = {type,id};
//     dispatch((payload))
      
//     }
//   }

  

const AllReliefGoods: React.FC = () => {

  // const {_id, title, image, unit, quantity,ratings} = reliefData;
  const handleRemove = () => {

    // dispatch(removeFromCart({id}));

    // dispatch(removeFromCart(_id))


   }
//  const reliefData = useAppSelector((store) => store.cart.reliefData)

const [reliefData1] = useState();
// const [reliefData1, setReliefData1] = useState();

const { data, isLoading, isFetching } =
  useGetAllReliefGoodsQuery(reliefData1);

console.log(
  "isLoading ========>",
  isLoading,
  "isFetching ========>",
  isFetching
);
// const dispatch = useAppDispatch();
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
              <Table >               
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.map((relief:any) => (
                    <TableRow key={relief._id}>
                      <TableCell className="font-medium">
                        <img src={relief.image} alt="" />
                      </TableCell>
                      <TableCell>{relief.unit}</TableCell>
                      <TableCell>{relief.quantity}</TableCell>
                      <TableCell className="text-right">
                <Button className="m-2 p-2 bg-green-400 ">
                  <Pencil></Pencil>
                </Button>
                <Button
                  // onClick={() => dispatch((reliefData(_id)))}
                  onClick={() => handleRemove()}

                  variant="destructive"
                  className="p-2 m-2"
                >
                  <Trash2></Trash2>
                </Button>
              </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                {/* <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter> */}
              </Table>
              </Container>
            )
          }
          
          
        
        
    


export default AllReliefGoods;