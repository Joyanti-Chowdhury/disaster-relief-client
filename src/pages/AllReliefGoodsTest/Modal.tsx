/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '../../Components/ui/Container';
// import ViewDetails from './ViewDetails';

const Modal = ({relief, onClose,handleViewDetails} : any) => {
    const { image, title,quantity,description,amount,expiry_date } = relief;
    return (
        <Container>



    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={image}
            alt=""
          />
          <div className="p-5 lg:p-11">
            <div className="">
              <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">
                {title}
              </h2>
              <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
               
              </span>
              <div></div>
            </div>
            <div className="flex space-x-5 items-center">
                
              <p className="text-sm lg:text-base">
                <strong>Amount : </strong>
                {amount}
              </p>

              <p className="text-sm lg:text-base ">
                <strong>Quantity : </strong>
                {quantity}
              </p>
              <p className="text-sm lg:text-base ">
                <strong>Expire Date : </strong>
                {expiry_date}
              </p>
            </div>
            <p className="text-sm lg:text-base mb-8 lg:mb-16 font-semibold mt-3">
              {description}
            </p>

            <div className="grid lg:grid-cols-2 gap-2 ">
              <a
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-white font-semibold text-sm"
                href="#"
                onClick={(e) => handleViewDetails(e, relief)}
              >
                {/* <img src={image} alt="" /> */}
                Viewed
              
              </a>
              <a
                onClick={onClose}
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                href=""
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
























            
            {/* <div className='flex sm:flex-col-1 gap-4 justify-center items-center w-[700px] mx-auto bg-cyan-50'>
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
            </div> */}
          
        </Container>
    );
};

export default Modal;