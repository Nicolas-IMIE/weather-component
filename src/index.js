import React, { Component } from 'react';

class WeatherComponent extends Component {

    forecast = require('forecast.io');


    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        options = {
            APIKey: "81e7868339d1d1aa55bc025aee4b7f02",
            timeout: 1000
        };
        darksky = new this.forecast(options);

        darksky.get('48', '1', function(err, res, data){
            if(err) throw err;
            this.setState({data: utils.inspect(data)});
            log('res : ' + utils.inspect(res));
            log('data : ' + utils.inspect(data));
        });
    }

    render(){
        return (
          <div>
              <h1>Rennes</h1>
              <span>Latitude : {this.state.data.latitude} -- Longitude : {this.state.data.longitude}</span><br/>
              <span>Temperature : {(this.state.data.temperature - 32) / 1.8}°C</span><br/>
              <span>Vitesse du vent : {this.state.data.windSpeed}</span><br/>
              <span>Visibilité : {this.state.data.visibility}</span><br/>
          </div>
        );
    }
}

export default WeatherComponent;


