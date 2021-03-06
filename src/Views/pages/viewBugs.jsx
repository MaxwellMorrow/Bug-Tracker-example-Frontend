
import { useDispatch,useSelector } from "react-redux"
import {getBugs} from "../../Controllers/Redux/bugSlice"
import { useEffect } from "react";
import bugCard from "../bugCard/bugCard";
import BugCard from "../bugCard/bugCard";

export default () =>{

    const dispatch = useDispatch();

    const {bugs} = useSelector(state =>state);

    useEffect(()=>{
        dispatch(getBugs());
    },[bugs.length < 1])

    function BugClicked(name){

    }

    return (
        <div className="page-container">
            { bugs.map((bug,key)=>(
                <BugCard key={key} bug={bug} clicked={BugClicked}/>
            ))}
        </div>
    )
}