import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import ListContainer from '../ExpensesPage/ListContainer';


const ExpensesRoute = () => <ListContainer />;

const ChartsRoute = () => <Text>Graficos</Text>;

const CalendarRoute = () => <Text>Calendar</Text>;

export default class BottomNavigationComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'expenses', title: 'Despesas', icon: 'format-list-bulleted' },
      { key: 'charts', title: 'Graficos', icon: 'show-chart' },
      { key: 'calendar', title: 'Calendario', icon: 'date-range' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    expenses: ExpensesRoute,
    charts: ChartsRoute,
    calendar: CalendarRoute,
  });

  render() {
    return (
      <>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </>
    );
  }
}