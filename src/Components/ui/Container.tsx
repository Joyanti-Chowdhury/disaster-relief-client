// import { cn } from "@/lib/utils";

import {cn} from '../../lib/utils';
import React from "react";

type  TContainer ={
    children : React.ReactNode;
    className ? :string;
}

const Container = ({children ,className}: TContainer) => {
    return (
        <div>
         <div className={cn("w-full max-w-[1220px] mx-auto px-[20px]", className)}>
        {children}
      </div>
    </div>
    );
};

export default Container;





// const Container = ({children ,className}: TContainer) => {
//   return (
//     <div>
//       <div className={cn("w-full max-w-[1220px] mx-auto px-[20px]", className)}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Container;
