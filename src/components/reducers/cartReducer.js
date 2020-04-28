import Item1 from '../../images/image1.jpg'
import Item2 from '../../images/image2.jpg'
import Item3 from '../../images/image3.jpg'
import Item4 from '../../images/image4.jpg'
import Item5 from '../../images/image5.jpg'

const initialState={
    items:[
        {id:1,title:'Men Black Abstract Printed Round Neck T-shirt'
        ,brand:'Here&Now',price:'599',MRP:'1500',desc:'Black printed T-shirt, has a round neck, short sleeves'
        ,img:Item1},
        {id:2,title:'Men Black Solid Iconic T7 Slim Fit Track Pants'
        ,brand:'Puma',price:'599',MRP:'1500',desc:'Black printed T-shirt, has a round neck, short sleeves'
        ,img:Item2},
        {id:1,title:'Men Black NRGY Neko Skim Running Shoes'
        ,brand:'Here&Now',price:'599',MRP:'1500',desc:'Black printed T-shirt, has a round neck, short sleeves'
        ,img:Item3},
        {id:1,title:'Women Black Slim Fit High-Rise Clean Look Stretchable Jeans'
        ,brand:'Here&Now',price:'599',MRP:'1500',desc:'Black printed T-shirt, has a round neck, short sleeves'
        ,img:Item4},
        {id:1,title:'Women Navy Blue Solid Crop Jacket'
        ,brand:'Street9',price:'599',MRP:'1500',desc:'Black printed T-shirt, has a round neck, short sleeves'
        ,img:Item5},
    ]
}

const cartReducer=(state=initialState,action)=>{
    return state;
}

export default cartReducer;