import React, { Component } from 'react';
import Aux from '../../hoc/AuxL';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 1,
			bacon: 1,
			cheese: 2,
			meat: 2
		}
	}
	render() {
		return (
			<Aux ingredients={ this.state.ingredients }>
				<Burger />
			</Aux>
		);
	}
}

export default BurgerBuilder;