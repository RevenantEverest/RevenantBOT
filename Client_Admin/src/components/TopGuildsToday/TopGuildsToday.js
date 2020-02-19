import React, { Component } from 'react';
import './TopGuildsToday.css';

import Spinner from 'react-bootstrap/Spinner';
import PieChart from '../Charts/PieChart/PieChart';

import commandLogServices from '../../services/commandLogServices';

class TopGuildsToday extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this._isMounted = true;
        this.getTopGuildsToday();
    }
    
    componentWillUnmount = () => this._isMounted = false;

    getTopGuildsToday() {
        if(!this._isMounted) return;
        commandLogServices.getTopGuildsToday()
        .then(logs => this.setState({ logs: logs.data.data, dataReceived: true }))
        .catch(err => console.error(err));
    }

    renderChart() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', ' August', 'September', 'October', 'November', 'December'];
        const today = new Date();
        const date = { day: today.getDate(), month: today.getMonth(), year: today.getFullYear() };
        
        let logsToday = this.state.logs;
        let data = {
            labels: logsToday.map(el => el.guild_name),
            datasets: [{
                data: logsToday.map(el => el.commandUses),
                backgroundColor: logsToday.map((el, idx) => {
                    if(idx === 0)
                        return "#FF5005";
                    else if(idx === 1)
                        return "#00B39A";
                    else if(idx === 2)
                        return "#CC8218";
                    else return null;
                }).filter(Boolean)
            }]
        };

        return <PieChart data={data} options={{ height: 100, title: `Top Guilds Today ( ${months[date.month]} ${date.day} )` }} />
    }

    render() {
        return(
            <div id="TopGuildsToday">
            {this.state.logs ? this.renderChart() : <Spinner animation="border" role="status" style={{ display: "inline-block" }}><span className="sr-only">Loading...</span></Spinner>}
            </div>
        );
    }
};

export default TopGuildsToday;