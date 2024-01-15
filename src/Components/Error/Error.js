import React from "react";
import { Alert } from "@material-tailwind/react";


const Error = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-items-center">
            <div className="w-[96]">
                <Alert color="red" className="text-xl font-bold">
                    No products match your filter search
                </Alert>
            </div>
        </div>
    )
};

export default Error;