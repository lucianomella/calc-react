import React from 'react'
import PropTypes from 'prop-types'
import './Result.css'

const Result = ({ value }) => {
	return (
		<div className="result">
			{value}
		</div>
	);
}

Result.prototype = {
	value: PropTypes.string.isRequired
}

Result.defaultProps = {
	value: "0"
}

export default Result;