interface Iprops{
    home:string,
    about:string,
    contact:string,
    logged:boolean,
    setLogged:(val:boolean )=>void
}
function Navpar({home,about,contact,logged,setLogged}:Iprops){
    // const {home,about,contact,projets} = prop
    return (
    <>
        <ul className="list" style={{
            padding:"15px",
            borderRadius:20,
            listStyle:"none",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            backgroundColor:"pink",
            marginBottom:20
        }}>
            <li><a href="#">{home}</a></li>
            <li><a href="#">{about}</a></li>
            <li><a href="#">{contact}</a></li>
            <button style={{
                width:50,
                height:30,
                border:0,
                background:"black"
            }} onClick={()=>{
                setLogged(!logged) 
            }}> 
            {logged ? "logout":"log in"}
            </button>
        </ul>
    </>
    )
}

export default Navpar;