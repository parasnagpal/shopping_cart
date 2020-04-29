import Item1 from '../../images/image1.jpg'
import Item2 from '../../images/image2.jpg'
import Item3 from '../../images/image3.jpg'
import Item4 from '../../images/image4.jpg'
import Item5 from '../../images/image5.jpg'

const initialState={
    items:[
        {id:1,title:'Men Black Abstract Printed Round Neck T-shirt'
        ,brand:'Here&Now',price:599,MRP:'1500',desc:'Black printed T-shirt, has a round neck, short sleeves'
        ,img:Item1},
        {id:2,title:'Men Black Solid Iconic T7 Slim Fit Track Pants'
        ,brand:'Puma',price:599,MRP:'1500',desc:'Black printed T-shirt, has a round neck, short sleeves'
        ,img:Item2},
        {id:3,title:'Men Black NRGY Neko Skim Running Shoes'
        ,brand:'Here&Now',price:599,MRP:'1500',desc:'Black printed T-shirt, has a round neck, short sleeves'
        ,img:Item3},
        {id:4,title:'Women Black Slim Fit High-Rise Clean Look Stretchable Jeans'
        ,brand:'Here&Now',price:599,MRP:'1500',desc:'Black printed T-shirt, has a round neck, short sleeves'
        ,img:Item4},
        {id:5,title:'Women Navy Blue Solid Crop Jacket'
        ,brand:'Street9',price:599,MRP:'1500',desc:'Black printed T-shirt, has a round neck, short sleeves'
        ,img:Item5},
    ],
    cartItems:[],
    total:0
}

const cartReducer=(state=initialState,action)=>{
    if(action.type==="ADD_TO_CART"){
        let newitem=state.items.find(item=>item.id===action.id)
        if(state.cartItems.find(item=>item.id===action.id)){
            newitem.quantity+=1;
            return{
                ...state,
                total:state.total+newitem.price
            }    
        }
        else{
            newitem.quantity=1;
            return{
                ...state,
                cartItems:[...state.cartItems,newitem],
                total:state.total+newitem.price
            }
        }
    }
    else if(action.type==="REMOVE_FROM_CART"){
        let item=state.cartItems.find(item=>item.id===action.id)
        item.quantity=item.quantity-1
        let newcart=state.cartItems
        if(!item.quantity)
            newcart.pop(item)
        return{
            ...state,
            total:state.total-item.price,
            cartItems:newcart
        }
    }
    else
        return state
    
}

export default cartReducer;