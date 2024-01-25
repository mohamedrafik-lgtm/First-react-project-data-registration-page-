interface Iprops{
    user:{
        username:string,
        password:string,
        email:string,
        address:string,
    }
}

function UserDate({user}:Iprops){
    return (
        <>
            <h3>username : {user.username}</h3>
            <h3>password : {user.password}</h3>
            <h3>Email : {user.email}</h3>
            <h3>address : {user.address}</h3>
            </>
    )
}

export default UserDate