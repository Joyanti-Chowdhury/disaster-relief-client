import Loader from "../../Components/ui/loader";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../Components/ui/table";

import { TSupplyData } from "../../types";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Error from "../../Components/ui/Error";
import { useGetAllSupplyQuery } from "../../redux/api/allReliefGoodsApi";
import EditModal from "../../Components/ui/EditModal";
import { Button } from "../../Components/ui/button";
import DeleteModal from "../../Components/ui/DeleteModal";
const AllSupply = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetAllSupplyQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

    return (
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: TSupplyData) => (
          <TableRow key={item.id}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell className="text-right space-x-5">
              <EditModal supply={item}>
                <Button>
                  <Pencil />
                </Button>
              </EditModal>
              <DeleteModal supply={item}>
                <Button variant="destructive">
                  <Trash2 />
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
    );
};

export default AllSupply;