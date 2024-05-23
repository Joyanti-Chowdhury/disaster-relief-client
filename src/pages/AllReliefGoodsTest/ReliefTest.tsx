/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../../Components/ui/button";
import Container from "../../Components/ui/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../Components/ui/card";
import { Check } from "lucide-react";
// import { useAppDispatch } from "../../../redux/features/hooks"
// import { addToCart } from "../../../redux/features/CartSlice";

const ReliefTest = ({relief}:any) => {

    const { image, title, quantity, unit , _id} = relief;
    return (
        <Container>
        <Card className="w-[350px] bg-violet-50 mt-10">
          <img className="w-full" src={image} alt="" />
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
              <Button
              className="mt-5 bg-cyan-700"> <a href={`/supply/${_id}`}>View Details</a></Button>
              </div>

            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </Container>
    );
};

export default ReliefTest;