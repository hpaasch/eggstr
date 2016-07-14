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
      <div className="container">
        <div className="row">
          <div className="md-col-6">
            <form>
              <h1>Please Order Your Awesome Egg</h1>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Sir/Madam Your Name Please" />
              </div>

              <ul>
                {eggOptionList}
              </ul>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = OrderForm;
