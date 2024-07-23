import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
});

const AppBar = () => {
    return (
      <View style={styles.container}>
        <ScrollView horizontal style={styles.scrollContainer}>
          <Link to="/" component={View}>
            <AppBarTab title="Repositories" />
          </Link>
          <Link to="/signin" component={View}>
            <AppBarTab title="Sign In" />
          </Link>
        </ScrollView>
      </View>
    );
  };
  
  export default AppBar;