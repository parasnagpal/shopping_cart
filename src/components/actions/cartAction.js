export const addtocart=(id,category)=>{
    return{
        type: "ADD_TO_CART",
        id,
        category
    }
}
    
export const removefromcart=(id,category)=>{
    return{
        type:"REMOVE_FROM_CART",
        id,
        category
    }
}