var React = require('react');
var ReactDOM = require('react-dom');
var $ = window.jQuery = require('jquery');

var OrderForm = require('./components/order-form.jsx');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            console.log("PATCHED!");
            xhr.setRequestHeader("X-CSRFToken", $("input[name=csrfmiddlewaretoken]").val());
        }
    }
});

ReactDOM.render(
  React.createElement(OrderForm),
  document.getElementById('container')
);
