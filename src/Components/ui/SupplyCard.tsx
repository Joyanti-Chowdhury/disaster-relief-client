import { useNavigate } from 'react-router-dom';
import { TSupplyData } from '../../types';
import { Card } from './card';
import { Button } from './button';
import { Badge } from './badge';

type SupplyCardProps = {
    data: TSupplyData;
  };
const SupplyCard = ({ data }: SupplyCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="hover:shadow-lg transition-all">
        <Card className="rounded-xl">
          <img className="w-full h-full rounded-t-xl" src={data.image} alt="" />
  
          <div className="p-3">
            <Badge className="mt-2">{data.category}</Badge>
            <h3 className="text-2xl my-3">Fruits and Vegetables</h3>
            <p className="mb-2 truncate hover:text-clip">
              Protein-rich foods are crucial for maintaining health and vitality.
              Your donation of proteins such as canned beans, canned tuna, and
              peanut butter provides vital nutrients and sustenance to those in
              need.
            </p>
            <p className=" mb-2">Quantity: {data.quantity}</p>
            <Button
              onClick={() => navigate(`/supplies/${data.id}`)}
              className="w-full my-3 rounded-full"
            >
              Details
            </Button>
          </div>
        </Card>
      </div>
    );
};

export default SupplyCard;