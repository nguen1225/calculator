import React from 'react';
import PropTypes from 'prop-types';

const NumBtm = ({n, onClick}) => (
	<button onClick={onClick}>{n}</button>
);

NumBtm.PropTypes = {
	onClick: PropTypes.func.isRequired;
};

export default NumBtm;