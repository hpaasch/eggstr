var React = require('react');

var models = require('../models/eggs');


var OrderForm = React.createClass({
  getInitialState: function(){
    var orders = new models.OrderCollection();

    return {
      'eggOptions': [],
      'option': '',
      'name': '',
      'orders': orders
    };
  },
  componentWillMount: function(){
    var self = this;
    var eggOptions = new models.EggOptionCollection();
    var orders = this.state.orders;

    orders.fetch().done(function(){
      self.setState({orders: orders});
    });

    orders.on('add', this.update);

    eggOptions.fetch().done(function(){
      self.setState({eggOptions: eggOptions});
    });
  },
  update: function(){
    this.forceUpdate();
  },
  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.state);
    this.state.orders.create({
      'name': this.state.name,
      'egg_option': this.state.option
    });
  },
  handleNameChange: function(e){
    this.setState({'name': e.target.value});
  },
  handleEggOptionChange: function(e){
    this.setState({'option': e.target.value});
  },
  render: function(){
    var self = this;
    var eggOptionList = this.state.eggOptions.map(function(model){
      return (
        <li key={model.get('id')}>
          <label htmlFor={model.get('id')}>
              <img src={model.get('image_url')} /> <br/>
              <input onChange={self.handleEggOptionChange} type="radio" name="option" id={model.get('id')} value={model.get('id')} />
          </label>
        </li>
      );
    });

    var orderList = this.state.orders.map(function(model){
      return <li key={model.get('id')}>{model.get('name')}</li>
    });

    return (
      <div className="container">
        <div className="row">
          <div className="md-col-6">
            <form onSubmit={this.handleSubmit}>
              <h1>Please Order Your Awesome Egg</h1>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" id="name" placeholder="Sir/Madam Your Name Please" />
              </div>

              <ul>
                {eggOptionList}
              </ul>

              <input className="btn btn-danger" type="submit" value="Place Your Order!" />
            </form>
          </div>
          <div className="md-col-6">
            <ul>
              {orderList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = OrderForm;
