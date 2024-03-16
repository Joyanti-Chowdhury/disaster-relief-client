// import { Button, Row } from "antd";

import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../Components/form/PhForm";
import PhFormInput from "../Components/form/phFormInput";

import { Button } from "../Components/ui/button";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

//   const { register, handleSubmit } = useForm({
//     defaultValues: {
//       id: "A-0001",
//       password: "admin123",
//     },
//   });


const  defaultValues = {
          id: "A-0001",
     password: "admin123",
      }

  const [login, { data, error }] = useLoginMutation();

  console.log("data => ", data);
  console.log("error => ", error);

  const onSubmit = async (data: FieldValues) => {
    console.log(data)
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      console.log(data);
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);

      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("logged in successfully", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="flex justify-center align-middle mt-10" style={{ height:'100vh' }}>
   
    <PhForm onSubmit={onSubmit} defaultValues={defaultValues}>
       <PhFormInput type="text" name="id" label="Id:" ></PhFormInput>
        <PhFormInput type="text" name="password" label="password:"></PhFormInput>
      {/* <Button htmlType="submit">Login</Button> */}
       <Button type="submit">Login</Button>
    </PhForm>
    </div>
  );
};

export default Login;
