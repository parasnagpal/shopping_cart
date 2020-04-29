export const addtocart=(id)=>{
    return{
        type: "ADD_TO_CART",
        id
    }
}
    
export const removefromcart=(id)=>{
    return{
        type:"REMOVE_FROM_CART",
        id
    }
}