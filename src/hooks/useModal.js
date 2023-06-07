import { useState } from "react";

export const useModal=()=>{

    const [seeModal, setSeeModal] = useState(null)

    const handleClick=(id)=>{
        setSeeModal(id)
        console.log(seeModal)
    }

    return {handleClick, seeModal}
    
}