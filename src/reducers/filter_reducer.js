import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_PRODUCTS)
  {
    let maxPrice = action.payload.reduce((acc,curr)=>{
      if(curr.price > acc)
      acc = curr.price;
      return acc;
    },0);
    return {...state,allProducts:[...action.payload],filteredProducts:[...action.payload],filters:{...state.filters,maxPrice:maxPrice,price:maxPrice}}
  }
  if(action.type === SET_LISTVIEW)
  {
    return {...state,gridView:false}
  }
  if(action.type === SET_GRIDVIEW)
  {
    return {...state,gridView:true}
  }
  if(action.type === UPDATE_SORT)
  {
    return {...state,sort:action.payload}
  }
  
  if(action.type === SORT_PRODUCTS)
  {
    const {sort, filteredProducts} = state;
    let sortedProducts = [...filteredProducts];
    if(sort === "price-lowest")
    {
      sortedProducts= sortedProducts.sort((prod1,prod2)=> prod1.price > prod2.price ? 0 : -1 );
    }
    if(sort === "price-highest")
    {
      sortedProducts = sortedProducts.sort((prod1,prod2)=>prod1.price > prod2.price ? - 1 : 0 )
    }
    if(sort === "name-a")
    {
      sortedProducts = sortedProducts.sort((prod1,prod2)=>prod1.name > prod2.name ? 0 : -1)
    }
    if(sort === "name-z")
    {
      sortedProducts = sortedProducts.sort((prod1,prod2)=>prod1.name > prod2.name ? -1 : 0)
    }
    return {...state,filteredProducts:[...sortedProducts]}
  }

  if(action.type === UPDATE_FILTERS)
  {
    const {name, value} = action.payload;
    return{...state,filters:{...state.filters, [name]:value}}
  }
  if(action.type === FILTER_PRODUCTS)
  {
    const {allProducts} = state;
    const {text, category, company, color, price, shipping} = state.filters;
    
    let tempProducts = [...allProducts];

    //text filtering
    if(text)
    tempProducts = tempProducts.filter(product => product.name.toLowerCase().includes(text));

    //category filtering
    if(category !== 'all')
    tempProducts = tempProducts.filter(product => product.category === category);

    //company filtering
    if(company !== 'all')
    tempProducts = tempProducts.filter(product => product.company === company);

    //color filtering
    if(color !== 'all')
    tempProducts = tempProducts.filter(product => product.colors.includes(color));

    //range filtering
    tempProducts = tempProducts.filter(product => product.price <= price);

    //filter shipping
    if(shipping)
    tempProducts = tempProducts.filter(product => product.shipping);

    return {...state,filteredProducts:tempProducts};
  }

  if(action.type === CLEAR_FILTERS)
  {
    return {
      ...state,
      filters : {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.maxPrice,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
