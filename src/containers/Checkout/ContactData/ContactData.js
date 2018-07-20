import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component  {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
          //console.log(this.props.ingredients);
                  this.setState({loading: true});
                   // alert('You continue!');
                   const order = {
                    ingredients: this.props.ings,
                    price: this.props.price,
                    customer: {
                        name:'Shivi',
                        address: {
                            street: '16-A',
                            zipCode: '140123',
                            country: 'India',
                            state: 'Punjab'
                        },
                        email: 'loveyou@anurag.com'
                         }, 
                        deliveryMethod: 'fastest'
                   }
                   axios.post('/orders.json', order)
                        .then(response => {
                            this.setState({loading: false});
                            this.props.history.push('/');
                   })
                   .catch(error => {
                    this.setState({loading: false });
                   });
    }
    render () {
        let form = (
                <form>
                    <Input inputtype="input" type="text" name= "name" placeholder="Your Name" />
                    <Input inputtype="input" type="text" name= "email" placeholder="Your Mail" />
                    <Input inputtype="input" type="text" name= "street" placeholder="Street" />
                    <Input inputtype="input" type="text" name= "postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if(this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
};
export default connect (mapStateToProps)(ContactData);