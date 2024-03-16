/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '../../Components/ui/Container';


const ViewDetailsCard = ({relief}: {relief: Record<string,any>}) => {
     const { image, title,quantity,description,amount,expiry_date } = relief;

    return (
        <Container>
            
            <div className='flex sm:flex-col-1 gap-4 justify-center items-center w-[700px] mx-auto bg-cyan-50'>
                <div className=''>
                <img className='w-[700px] h-[300px] rounded-lg' src={image} alt="" />
                </div>
                <div className='border-solid border-2 p-5 flex flex-col gap-3 m-5 w-[700px] h-[300px]'> 
                    <h2 className='text-3xl font-bold text-center'>{title}</h2>
                    <p className='text-center font-semibold p-2'>Quantity:{quantity}</p>
                    <p className='text-center font-semibold text-wrap space-x-5'>Description:{description}</p>
                    <p className='text-center font-semibold p-2'>Amount per Unit:{amount}</p>
                    <p className='text-center font-semibold'>Expiry Date:{expiry_date}</p>
                </div>
            </div>
        </Container>
    );
};

export default ViewDetailsCard;