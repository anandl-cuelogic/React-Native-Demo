import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { employeeFetch } from '../action';


class EmplyoeeList extends Component {
    componentWillMount() {
     this.props.employeeFetch();
     this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
   createDataSource({ employees }) {
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
          });
          this.DataSource = ds.cloneWithRows(employees);
   }
  render() {
      console.log(this.props);
      return ( 
           <View>
              <Text> EmplyoeeList </Text>
              <Text> EmplyoeeList </Text>
              <Text> EmplyoeeList </Text>
          </View>
      );
  }
}
const mapStateToProps = (state) => {
   const employeesList = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
   }); 
   return employeesList;
};
export default connect(mapStateToProps, { employeeFetch })(EmplyoeeList);
