import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions/AppActions';
import Graph from './components/Graph/Graph';
import Period from './components/Period/Period';
import Params from './components/Params/Params';
import Loader from './components/Loader/Loader';
import { recieveData } from './utils/API';
import './App.css';

const mapStateToProps = (state) => {
  return { ...state };
};

class App extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { period } = this.props;
    recieveData(period).then((response) =>{      
      if (response.status === 'ok') {
        const { setData } = this.props;
        setData(response.data);
        this.setState({isLoading: false});
      }
    }).catch((error)=>{
      this.setState({isLoading: false});
    });
  }

  onChangePeriod(newPeriod) {
    const { changePeriod, period } = this.props;

    if (newPeriod === period) return;

    this.setState({isLoading: true});    
    changePeriod(newPeriod).then(() => this.getData());
  }

  onChangeParam(param){
    const { changeParam } = this.props;
    changeParam(param);
  }

  render() {    
    const { data, period, param } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="app">
        {isLoading && <Loader />}
        <Period click={this.onChangePeriod.bind(this)} period={period}/>
        <Graph data={data} param={param}/>
        <Params change={this.onChangeParam.bind(this)} selected={param}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  actions,
)(App);

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  period: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
}
