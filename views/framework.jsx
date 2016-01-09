var React = require('react');
var GlobalHeader = require('./globals/global_header.jsx');
var GlobalFooter = require('./globals/global_footer.jsx');

var Framework = React.createClass({

	render: function() {
		return (
			<div className="framework">
				<GlobalHeader/>
				{this.props.children}
				<GlobalFooter/>
			</div>
		);
	}

});

module.exports = Framework;
