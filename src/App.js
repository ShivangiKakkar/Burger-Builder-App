import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckoutSummary from './containers/Checkout/Checkout';
import Checkout from './containers/Checkout/Checkout';
class App extends Component {
  // state = {
  //   show: true
  // }
  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   }, 5000);
  // }
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder /> 
          <Checkout /> 
          </Layout>

      </div>
    );
  }
}

export default App;
