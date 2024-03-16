import Container from '../../Components/ui/Container';
import cardImg1 from "../../assets/cardImg1.jpg";
import cardImg2 from "../../assets/cardImg2.jpg";
import cardImg3 from "../../assets/cardImg3.jpg";
import cardImg4 from "../../assets/cardImg4.jpg";
import cardImg5 from "../../assets/cardImg5.jpg";
import ViewDetailsCard from './ViewDetailsCard';


const reliefData = [
  
    {
      "_id":" 1",
      "title": "Bottled Water",
      "image": cardImg1,
      "unit": "liters",
      "quantity": 5000,
      "category": "Food Supplies",
      "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
      "expiry_date": "2024-12-31"
    },
    {
      "_id": "2",
      "title": "Canned Food",
      "image": cardImg2,
      "unit": "units",
      "quantity": 10000,
      "category": "Shelter Kits",
      "amount": "1 piece",
      "description": "Warm and comfortable blanket suitable for all ages. Provides insulation against cold weather.",
      "expiry_date": "N/A"
    },
    {
      "_id":" 3",
      "title": "Blankets",
      "image": cardImg3,
      "unit": "units",
      "quantity": 2000,
      "category": "Food Supplies",
      "amount": "1 gallon",
      "description": "Purified drinking water in convenient bottles. Essential for hydration and cooking.",
      "expiry_date": "2025-06-30"
    },
    {
      "_id":" 4",
      "title": "First Aid Kits",
      "image": cardImg4,
      "unit": "kits",
      "quantity": 500,
      "category": "Clothing",
      "amount": "10 kg",
      "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
      "expiry_date": "2024-12-31"
    },
    {
      "_id":"5",
      "title": "Flashlights",
      "image": cardImg5,
      "unit": "units",
      "quantity": 1000,
      "category": "Clothing",
      "amount": "1 gallon",
      "description": "Purified drinking water in convenient bottles. Essential for hydration and cooking.",
      "expiry_date": "2025-06-30"
    },
    {
      "_id":"6",
      "title": "Battery Packs",
      "image": cardImg1,
      "unit": "units",
      "quantity": 300,
      "category": "Shelter Kits",
      "amount": "10 kg",
      "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
      "expiry_date": "2024-12-31"
    },
    {
      "_id":"7",
      "title": "Hygiene Kits",
      "image": cardImg2,
      "unit": "kits",
      "quantity": 1500,
      "category": "Clothing",
      "amount": "1 kit",
      "description": "Comprehensive first aid kit containing essential supplies for treating minor injuries and ailments.",
      "expiry_date": "2024-09-30"
    },
    {
      "_id":"8",
      "title": "Tents",
      "image": cardImg3,
      "unit": "units",
      "quantity": 100,
      "category": "Food Supplies",
      "amount": "10 kg",
      "description": "High-quality rice suitable for consumption. Provides essential carbohydrates for sustenance.",
      "expiry_date": "2024-12-31"
    },
    {
      "_id": "9",
      "title": "Portable Stoves",
      "image": cardImg4,
      "unit": "units",
      "category": "Shelter Kits",
      "quantity": 200,
      "amount": "1 kit",
      "description": "Kit containing soap, toothpaste, toothbrush, sanitary napkins, and other hygiene essentials.",
      "expiry_date": "N/A"
      
     
    }
  
  ]
  

const ViewDetails = () => {
   
    return (
        <Container>

        {
            reliefData.map(relief => <ViewDetailsCard key={relief._id} relief={relief}>



            </ViewDetailsCard>)
        }




            
        </Container>
    );
};

export default ViewDetails;