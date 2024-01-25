import { ChangeEvent } from "react"
import {IuserDate} from "./interFasess/index"
import {formInput} from "./data/udata.ts"
interface prop{
    setLogged:(val:boolean )=>void,
    userData:IuserDate,
    steUsrData:(user:IuserDate)=> void
}

function Form({setLogged,userData,steUsrData}:prop){
    // dandler
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        const {value , name} = e.target
        steUsrData({
            ...userData,
            [name] : value ,
        })
    }
    // render
    const renderFormInput = formInput.map((ele,idx) => (
        <div key={idx}>
            <label htmlFor={ele.id}>{ele.label} :</label>
            <input  name={ele.name} id={ele.id} type={ele.type} value={userData[ele.name]} onChange={onChangeHandler} />
        </div>
        ))
return(
<form onSubmit={(e)=>{
e.preventDefault()
}}>
    
    
    {renderFormInput}
    <button onClick={()=>{
        setLogged(true)
    }}>submit</button>
</form>
)
}

export default Form