export interface IuserDate{
        username:string,
        password:string,
        email:string,
        address:string,
        
}

export interface IForm{
    label:string,
    name:keyof IuserDate,
    id:string,
    type:string,
    
}