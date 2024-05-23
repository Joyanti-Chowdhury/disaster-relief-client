/* eslint-disable @typescript-eslint/no-explicit-any */

import Container from "../../Components/ui/Container";

  import Chart from 'chart.js/auto'
import { MutableRefObject, useEffect, useRef } from "react";
  
const AdminDashboard = () => {


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





  




    </Container>
        </div>
    );
};

export default AdminDashboard;