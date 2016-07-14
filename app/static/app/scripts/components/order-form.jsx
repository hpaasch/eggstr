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

    //orders.fetch().done(function());

    eggOptions.fetch().done(function(){
      self.setState({eggOptions: eggOptions});
    });
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
          <img src={model.get('image_url')} /> <br/>
          <input onChange={self.handleEggOptionChange} type="radio" name="option" value={model.get('id')} />
        </li>
      );
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
        </div>
      </div>
    );
  }
});

module.exports = OrderForm;
