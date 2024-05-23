import Container from "../../Components/ui/Container";
import bannerImg from "../../assets/banner1.jpg";
import gradientImg from "../../assets/gradient.jpeg";
// import cardImg from "../../assets/relief16.jpg"
import { Button } from "../../Components/ui/button";
import cardImg1 from "../../assets/relief17.jpg"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../Components/ui/card";
import { Bookmark,  Star,  } from "lucide-react";

import { useGetSingleReliefGoodsQuery } from "../../redux/api/allReliefGoodsApi";
import { useParams } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Supply = () => {

  // const {id} = useParams()
  const { id } = useParams<{ id: string }>();
   
  // const [reliefData1] = useState(id);

  // const { data } =   useGetAllReliefGoodsQuery(reliefData1);
  const { data} = useGetSingleReliefGoodsQuery(id as string);


  

    // console.log(data)  
  return (
    <Container className="min-h-screen">
      <div>
        <div className="mt-10 relative opacity-10 blur-sm">
          <img className="h-[200px] w-full" src={bannerImg} alt="" />
        </div>
        <div className="mt-[-200px] absolute w-full  ">
          <img className="h-[200px] w-full" src={gradientImg} alt="" />

          <div className='  bg-gradient-to-r from-green-200 to-blue-300 hover:from-pink-200 hover:to-yellow-300 ... "  '>
            <div className="relative text-xl flex   font-bold justify-center items-center">
              <a href="/"> Home</a>
              <p className="p-2">/</p>
              <a href="/supply">Supply</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className="border p-5 mx-auto rounded-md">
            <img
              className="h-[400px] w-[400px] rounded-md"
              src={data?.image}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-slate-500"> {data?.title}</h2>

            <div className="w-[100px] mt-5 text-cyan-400">
              <hr />
            </div>
            <div className="w-[100px] mt-5 text-cyan-400">
              <hr />
            </div>

            <p className="text-4xl font-bold text-cyan-500 mt-5">$600</p>

            <p className="mt-10 text-slate-700">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              nemo?
            </p>

            <div className="mt-8 flex">
              <div>
                <Button
                  variant={"outline"}
                  className="hover:bg-cyan-600 hover:text-white font-semibold text-xl "
                >
                  Add to Cart
                </Button>
              </div>
              <div className="pl-5">
                <Button className="bg-cyan-500 font-semibold text-xl ">Donate Now</Button>
              </div>
            </div>

            <p className="text-xl mt-5 font-bold">Category: {data?.category}</p>
          </div>
        </div>
      </div>

      <div className="m-10 ">
        <div className="mt-8 pl-5">
          <button className="hover:bg-cyan-600 bg-green-400 hover:text-white py-3 px-10 font-bold">
          DESCRIPTION
          </button>

          <button className="hover:bg-cyan-600 bg-slate-400 hover:text-white font-bold  py-3 px-10">
           REVIEWS
          </button>
        </div>
        <div className="pl-2 ml-3">
          {" "}
          <hr />
        </div>
      </div>

      <div className="border border-gray-500 m-5 p-5">
        <h3 className="text-slate-500 ml-5">Description</h3>
        <div className="w-[100px] m-5 pl-5 text-cyan-400">
              <hr />
            </div>
            <div className="w-[100px] ml-5 pl-5 text-cyan-400">
              <hr />
            </div>
    
    <p className="text-slate-500 mt-5 p-8 "> <span className="font-bold text-xl ">Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Autem fuga suscipit ut nisi! Non facilis nemo sunt ea omnis dignissimos, deleniti nulla ducimus ex numquam cumque. Debitis aspernatur a quo quas nesciunt neque repellat! Assumenda non voluptatum est facere. Iste cupiditate, natus doloremque nostrum voluptate maxime eligendi suscipit assumenda mollitia reprehenderit aliquid ducimus quisquam pariatur odio quod, aperiam obcaecati cum. Excepturi eius voluptas expedita. Corporis tempore similique natus blanditiis assumenda fuga optio illo unde ullam nulla est, tempora recusandae voluptatum fugit dolores vitae nisi labore accusantium magni adipisci  </p>
    <p className="text-slate-500  pl-8"> <span className="font-bold text-xl">Lorem ipsum </span>dolor sit amet consectetur adipisicing elit. Autem fuga suscipit ut nisi! Non facilis nemo sunt ea omnis dignissimos, deleniti nulla ducimus ex numquam cumque. Debitis aspernatur a quo quas nesciunt neque repellat! Assumenda non voluptatum est facere. Iste cupiditate, natus doloremque nostrum voluptate maxime eligendi suscipit assumenda mollitia reprehenderit aliquid ducimus quisquam pariatur odio quod, aperiam obcaecati cum. Excepturi eius voluptas expedita. Corporis tempore similique natus blanditiis assumenda fuga optio illo unde ullam nulla est, tempora recusandae voluptatum fugit dolores vitae nisi labore accusantium magni adipisci  </p>
      </div>

      <div className="m-10 ">
        <div className="mt-8 pl-5">
        <h3 className="text-slate-500 ml-5 font-black">Related Post</h3>
        </div>
        </div>
  

   <div className="grid grid-cols-1 lg:grid-cols-3 m-5">
        <Card className="w-[350px] bg-sky-100 mt-10 shadow-lg shadow-sky-400 border border-spacing-2 border-slate-300 p-4 rounded-md">
          <img className="w-full rounded-md" src={cardImg1} alt="" />
          <CardHeader>
            <CardTitle className="font-bold  text-2xl text-slate-500"> Tshirt </CardTitle>
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
              <Button
              className="mt-5 bg-cyan-700 font-bold text-2xl items-end w-full">Donate Now</Button>
              </div>

            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className="w-[350px] bg-sky-100 mt-10 shadow-lg shadow-sky-400 border border-spacing-2 border-slate-300 p-4 rounded-md">
          <img className="w-full rounded-md" src={cardImg1} alt="" />
          <CardHeader>
            <CardTitle className="font-bold  text-2xl text-slate-500"> Tshirt </CardTitle>
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
              <Button
              className="mt-5 bg-cyan-700 font-bold text-2xl items-end w-full">Donate Now</Button>
              </div>

            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className="w-[350px] bg-sky-100 mt-10 shadow-lg shadow-sky-400 border border-spacing-2 border-slate-300 p-4 rounded-md">
          <img className="w-full rounded-md" src={cardImg1} alt="" />
          <CardHeader>
            <CardTitle className="font-bold  text-2xl text-slate-500"> Tshirt </CardTitle>
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
              <Button
              className="mt-5 bg-cyan-700 font-bold text-2xl items-end w-full">Donate Now</Button>
              </div>

            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
       
</div>
   
      

        
    </Container>
  );
};

export default Supply;
