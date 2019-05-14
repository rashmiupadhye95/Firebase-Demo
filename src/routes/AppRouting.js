import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashBoardPage from '../pages/DashboardPage';



const Route = createStackNavigator(
    {
        Login: LoginPage,
        Register: RegisterPage,
        Dashboard: DashBoardPage,
    },
    {
        initialRouteName: 'Login'
    }
);

const RouterConfig = createAppContainer(Route);
export default RouterConfig;