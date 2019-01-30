import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeeFetch } from '../action';
import ListItem from './ListItem';


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
   renderRow(employee) {
       return < ListItem employee={employee} />;
          }
  render() {
      console.log(this.props);
      return ( 
          <ListView
            enableEmptySections
            dataSource={this.DataSource}
            renderRow={this.renderRow}

          />
      );
  }
}
const mapStateToProps = state => {
   const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
   }); 
   return { employees };
};
export default connect(mapStateToProps, { employeeFetch })(EmplyoeeList);
