import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
            axios.post('/orders.json', orderData)
            .then( response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data, orderData) );
                //this.setState({ loading: false } );
               // this.props.history.push( '/' );
       } )
       .catch( error => {
           dispatch(purchaseBurgerFail(error));
            //this.setState( { loading: false } );
       } );
        
    };
};