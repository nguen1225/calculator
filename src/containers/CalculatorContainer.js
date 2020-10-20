import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import NumBtn from '../components/NumBtn';
import PlusBtn from '../components/PlusBtn';
import Result from '../components/Result';

class CalculatorContainer extends Component {
	render() {
		const { calculator, actions } = this.props;
		return(
			<div>
				<div>
					<NumBtn n={1} />
					<NumBtn n={2} />
					<NumBtn n={3} />
				</div>
				<div>
					<NumBtn n={4} />
					<NumBtn n={5} />
					<NumBtn n={6} />
				</div>
				<div>
					<NumBtn n={7} />
					<NumBtn n={8} />
					<NumBtn n={9} />
				</div>
				<div>
					<NumBtn n={0} />
					<PlusBtn />
				</div>
				<div>
					<Result />
				</div>
			</div>
		);
	}
}

export default CalculatorContainer;