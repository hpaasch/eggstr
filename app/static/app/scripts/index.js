var React = require('react');
var ReactDOM = require('react-dom');

var OrderForm = require('./components/order-form.jsx');

ReactDOM.render(
  React.createElement(OrderForm),
  document.getElementById('container')
);
