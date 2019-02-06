import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './componets/LoginForm';
import EmployeeList from './componets/EmplyoeeList';
import EmployeeCreate from './componets/EmployeeCreate';
import EmployeeEdit from './componets/EmployeeEdit';


const RounterComponent = () => {
   return (
        <Router Sce={{ paddingTop: 65 }}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                  <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene> 
                  <Scene key="main">
                    <Scene 
                    rightTitle="Add"
                    onRight={() => { Actions.employeeCreate(); }}
                    key="EmployeeList" 
                    component={EmployeeList} 
                    title="Employees" 
                    initial
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Empolyee Create" />
                    <Scene key="employeeEdite" component={EmployeeEdit} title="Edite Employee" />
                  </Scene> 
                 </Scene>
        </Router>

   );
};
export default RounterComponent;

