import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {


    const [inputval1 ,setinputval1] = useState(0);


    const allbtarr = [

    {value:0 , btfun:()=>{setinputval1(0)} },
    {value:1 , btfun:() =>{setinputval1(1)}},
    {value:2 , btfun:()=> {setinputval1(2)}},
    {value:3 , btfun:()=> {setinputval1(3)}},
    {value:4 , btfun:()=> {setinputval1(4)}},
    {value:5 , btfun:()=> {setinputval1(5)}},
    {value:6 , btfun:()=> {setinputval1(6)}},
    {value:7 , btfun:()=> {setinputval1(7)}},
    {value:8 , btfun:()=> {setinputval1(8)}},
    {value:9 , btfun:()=> {setinputval1(9)}},
    
 ]

return (

<div>
<p>this is cal function {inputval1}</p>

<CalWrapper allbtarr ={allbtarr} />

</div>


)



}

export default Cal;