/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from "react-router-dom";
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
import { Pencil, Trash2 } from "lucide-react";
import { useGetAllSupplyQuery } from "../../redux/api/allReliefGoodsApi";
import Loader from "../../Components/ui/loader";
import Error from "../../Components/ui/Error";
import EditModal from "../../Components/ui/EditModal";
import DeleteModal from "../../Components/ui/DeleteModal";
const SupplyDashboard = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetAllSupplyQuery(undefined);
  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <Error></Error>;
  }

  console.log(data);

  return (
    <Container>
      <Table>
        <TableHeader>
          <TableRow className="bg-dark-gray ">
            <TableHead className="w-[70px] text-white">Name</TableHead>
            <TableHead className="text-white w-[100px] px-5">
              Description
            </TableHead>
            <TableHead className="text-white  w-[100px]">price</TableHead>
            <TableHead className="text-right text-white  w-[100px] ">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data &&
            data?.data?.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell className="text-right">
                  <EditModal supply={item}>
                    <Button className="m-2 p-2 bg-green-400 ">
                      <Pencil></Pencil>
                    </Button>
                  </EditModal>
                  <DeleteModal supply={item}>
                    <Button variant="destructive" className="p-2 m-2">
                      <Trash2></Trash2>
                    </Button>
                  </DeleteModal>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow className="">
            <TableCell colSpan={4} className="">
              <Button onClick={() => navigate("/dashboard/create-supply")}>
                Add Supply
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};

export default SupplyDashboard;
