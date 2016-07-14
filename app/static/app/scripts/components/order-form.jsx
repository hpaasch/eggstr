var React = require('react');

var models = require('../models/eggs');

var OrderForm = React.createClass({
  getInitialState: function(){
    return {'eggOptions': []};
  },
  componentWillMount: function(){
    var eggOptions = new models.EggOptionCollection();

    eggOptions.fetch().done(function(){
      this.setState({eggOptions: eggOptions});
    });
  },
  render: function(){
    var eggOptionList = this.state.eggOptions.map(function(model){
      return (
        <li key={model.get('id')}>
          <img src={model.get('image_url')} /> <br/>
          <input type="radio" name="option" value={model.get('id')} />
        </li>
      );
    });

    return (
      <form>
        <h1>Please Order Your Awesome Egg</h1>

        <input name="name" type="text" />

        <ul>
          {eggOptionList}
        </ul>
      </form>
    );
  }
});

module.exports = OrderForm;
