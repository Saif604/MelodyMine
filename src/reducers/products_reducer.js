import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if(action.type === SIDEBAR_OPEN ){
    return {...state,isSidebarOpen:true};
  }
  else if(action.type === SIDEBAR_CLOSE)
  {
    return {...state,isSidebarOpen:false};
  }
  else if(action.type === GET_PRODUCTS_BEGIN)
  {
    return {...state,productsLoading:true};
  }
  else if(action.type === GET_PRODUCTS_SUCCESS)
  {
    const products = action.payload;
    const featuredProducts = products.filter((product)=>product.featured);
    return {...state,productsLoading:false,products ,featuredProducts};
  }
  else if(action.type === GET_PRODUCTS_ERROR)
  {
    return {...state, productsLoading: false,productsError:true};
  }
  else if(action.type === GET_SINGLE_PRODUCT_BEGIN)
  {
    return {...state,singleProductLoading:true, singleProductError:false};
  }
  else if(action.type === GET_SINGLE_PRODUCT_SUCCESS)
  {
    return {...state,singleProductLoading:false, singleProduct:action.payload};
  }
  else if(action.type === GET_SINGLE_PRODUCT_ERROR)
  {
    return {...state, singleProductLoading:false, singleProductError:true}
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
