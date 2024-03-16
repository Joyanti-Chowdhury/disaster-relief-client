/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../../Components/ui/button";
import Container from "../../Components/ui/Container";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../Components/ui/table";
  import { Pencil, Trash2 } from "lucide-react"
  import Chart from 'chart.js/auto'
import { MutableRefObject, useEffect, useRef } from "react";
  
const AdminDashboard = () => {

    const handleDelete = () =>{

    }
  //  const chartRef:MutableRefObject<null> = useRef(null)
  //  const chartInstance: MutableRefObject<null> = useRef(null)

   
  const chartRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const chartInstance: MutableRefObject<Chart<"pie"> | null> = useRef(null);

    
   //Renders the pie chart with data
   useEffect(() => {
   if(chartInstance.current) {
       chartInstance.current.destroy ()
   }        
            const myChartRef :any = chartRef?.current?.getContext("2d");
            
            chartInstance.current = new Chart(myChartRef, {
                type: "pie",
                data:{
                    labels: ["label 1","label 2", "label 3", "label 4", "label 5"],
                    datasets:[
                        {
                           
                            data: [300, 50, 100,10,5 ],
                            backgroundColor: [
                              'rgb(255, 99, 132)',
                              'rgb(54, 162, 235)',
                              'rgb(255, 205, 86)',
                              'rgb(75, 192, 192)',
                              'rgb(153, 102, 255)',
                            ],
                        }
                    ]
                },
                options: {}
            })
            return ()=> {
              if(chartInstance.current) {
                chartInstance.current.destroy()
              }
            }
   },[])



    return (
        <div>
               

            <Container className=" border p-0 rounded-2xl">

         
         <canvas ref={chartRef}  style={{ width:"100px",height:"100px" }}></canvas>





      <Table>
        <TableHeader>
          <TableRow className="bg-dark-gray ">
            <TableHead className="w-[70px] text-white">Name</TableHead>
            <TableHead className="text-white w-[100px] px-5">Description</TableHead>
            <TableHead className="text-white  w-[100px]">price</TableHead>
            <TableHead className="text-right text-white  w-[100px] ">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {services?.map((service) => ( */}
            <TableRow>
              <TableCell className="font-medium">name</TableCell>
              <TableCell>description</TableCell>
              <TableCell>asdf</TableCell>
              <TableCell className="text-right">
                <Button className="m-2 p-2 bg-green-400 ">
                  <Pencil></Pencil>
                </Button>
                <Button
                  onClick={() => handleDelete()}
                  variant="destructive"
                  className="p-2 m-2"
                >
                  <Trash2></Trash2>
                </Button>
              </TableCell>
            </TableRow>
          {/* ))} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Services</TableCell>
            <TableCell className="text-right">total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>




    </Container>
        </div>
    );
};

export default AdminDashboard;