import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions/AppActions';
import Graph from './components/Graph/Graph';
import Period from './components/Period/Period';
import Params from './components/Params/Params';
import './App.css';

const mapStateToProps = (state) => {
  return { ...state };
};

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.setState({data: [
      {
        name: '01.10', yield: 4000, price: 2400, spread: 2400,
      },
      {
        name: '02.10', yield: 3000, price: 1398, spread: 2210,
      },
      {
        name: '03.10', yield: 2000, price: 9800, spread: 2290,
      },
      {
        name: '04.10', yield: 2780, price: 3908, spread: 2000,
      },
      {
        name: '05.10', yield: 1890, price: 4800, spread: 2181,
      },
      {
        name: '06.10', yield: 2390, price: 3800, spread: 2500,
      },
      {
        name: '07.10', yield: 3490, price: 4300, spread: 2100,
      },
    ]
    });
  }

  onChangePeriod(period) {
    console.log(period);
  }

  onChangeParam(event){
    console.log(event.currentTarget.value);
  }

  render() {
    const { period, param } = this.props;

    return (
      <div>
        <Period click={this.onChangePeriod} period={period}/>
        <Graph data={this.state.data}/>
        <Params change={this.onChangeParam} selected={param}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  actions,
)(App);
