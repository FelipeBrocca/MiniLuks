import { useState } from "react"
import '../index.css'

export default function usePopUp() {


    const [popUpState, setPopUpState] = useState(false);
    const [isClosed, setIsClosed] = useState(true);
    

    const handlePopUp = () => {
        setPopUpState(!popUpState);
        setIsClosed(!isClosed);
    }

    const backdropPopUp = (
        <div 
        className="backdropPopUp"
        onClick={handlePopUp}>
        </div>
    )


    return { popUpState, setPopUpState, backdropPopUp, isClosed, setIsClosed, handlePopUp }

}