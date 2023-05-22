
import Button from "../../common/Button";
const CalWrapper = (props) => {

    

    const allbutton =  props.allbtarr.map((btobj) => {

       return <Button btname ={btobj.value} btfun= {btobj.btfun}></Button> ;

    });

    console.log("allbutton ", allbutton);


    return (
    
    <div>


    
   {allbutton}

    
    
    </div>
    
    
    )
    
    
    
    };
    
    export default CalWrapper;