import { Button } from "../Components/ui/button";
import Container from "../Components/ui/Container";
// import registerImg from "../assets/login-animation.gif";
import registerImg from "../assets/login-page-template-glass-style_1017-31854.avif";


const Register = () => {
    const handleRegister = () => {

    }
  return (
    <Container className="m-10">
      <h1 className="text-center text-sky-600  text-transparent ">Register</h1>
      <div className="register-container m-5">
        <div className="register-left">
          <div className="md:flex mb-7">
            <div className=" md:w-1/2  px-3.5">
              <img
                src={registerImg}
                alt="register"
                className="register-img h-[520px] w-full rounded-md m-6"
              />
            </div>

            <div className="form-control md:w-1/2 ml-4">
                   


            <div className="bg-[#75badf] p-16 m-6 rounded-md">
   
      <form onSubmit={handleRegister}>
        {/* form name and quantity row */}
        <div className="md:flex mb-10">
          <div className="form-control md:w-full items-center">
            <label className="label">
              <span className="label-text font-bold text-xl mt-4"> Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full rounded p-2"
              />
            </label>
          </div>

        
        </div>
        {/* form supplier row */}
    

        <div className="md:flex mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-bold text-xl mt-4">Email</span>
            </label>
            <label className="input-group">
              <input
       
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full p-2 rounded"
              />
            </label>
          </div>
        
        </div>


        <div className="md:flex mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Password</span>
            </label>
            <label className="input-group">
              <input
     
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full p-2 rounded"
              />
            </label>

          <div className="flex text-right mt-5">
          <p>Already have an account</p>
          <a href="/login" className="text-sky-900 pl-3 font-semibold ">Login</a>
          </div>
          </div>
        
     
        </div>



    




        {/* <input type="submit" value="Add Service" className="btn btn-block" /> */}

        <Button type="submit" value="register">
          {" "}
        Register
        </Button>
      </form>
    </div>







            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
