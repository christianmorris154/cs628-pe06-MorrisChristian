import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from '../../src/Cities/Cities';
import AddCity from '../../src/AddCity/AddCity';
import Countries from '../../src/Countries/Countries';
import AddCountry from '../../src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ navigation, route }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Cities"
        component={Cities}
        initialParams={{
          cities: route.params.cities,
          addCity: route.params.addCity,
          addLocation: route.params.addLocation,
        }}
      />
      <Stack.Screen
        name="City"
        component={City}
        initialParams={{
          cities: route.params.cities,
          addCity: route.params.addCity,
          addLocation: route.params.addLocation,
        }}
      />
    </Stack.Navigator>
  );
}

function CountriesStackScreen({ navigation, route }) {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Countries"
        component={Countries}
        initialParams={{
          countries: route.params.countries,
          addCountry: route.params.addCountry,
          addCurrency: route.params.addCurrency,
        }}
      />
      <Stack.Screen
        name="Country"
        component={Country}
        initialParams={{
          countries: route.params.countries,
          addCountry: route.params.addCountry,
          addCurrency: route.params.addCurrency,
        }}
      />
    </Stack.Navigator>
  );
}

export default class App extends component {
  state = {
    cities: [],
    countries: [],
  };

  addCity = (city) => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({ cities });
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => item.id === city.id);
    const chosenCity = this.state.cities[index];
    chosenCity.locations.push(location);
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1),
    ];
    this.setState({ cities });
  };

  addCountry = (country) => {
    const countries = this.state.countries;
    countries.push(country);
    this.setState({ countries });
  };

  addCurrency = (currency, country) => {
    const index = this.state.countries.findIndex((item) => item.id === country.id);
    const chosenCountry = this.state.countries[index];
    chosenCountry.currencies.push(currency);
    const countries = [
      ...this.state.countries.slice(0, index),
      chosenCountry,
      ...this.state.countries.slice(index + 1),
    ];
    this.setState({ countries });
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="CitiesNav"
            component={CitiesStackScreen}
            initialParams={{ cities: this.state.cities, addCity: this.addCity, addLocation: this.addLocation }}
          />
          <Tab.Screen
            name="AddCity"
            initialParams={{ cities: this.state.cities, addCity: this.addCity, addLocation: this.addLocation }}
            component={AddCity}
          />
          <Tab.Screen
              name="CountriesNav"
              component={CountriesStackScreen}
              initialParams={{
                countries: this.state.countries,
                addCountry: this.addCountry,
                addCurrency: this.addCurrency,
              }}
            />
          <Tab.Screen
            name="AddCountry"
            initialParams={{ countries: this.state.countries, addCountry: this.addCountry, addCurrency: this.addCurrency }}
            component={AddCountry}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}