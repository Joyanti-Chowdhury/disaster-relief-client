import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { RefreshCcw } from "lucide-react";


const Error = () => {
    const navigate = useNavigate()
    return (
        <div className="full-screen w-full flex items-center justify-center">
        <div className=" border p-5 flex flex-col items-center gap-5">
          <p className="text-red-500 text-xl text-center">
            Something went wrong!
          </p>
          <Button onClick={() => navigate(0)} className="inline-flex space-x-1">
          <RefreshCcw/>
            <span>Reload</span>
          </Button>
        </div>
      </div>
    );
};

export default Error;