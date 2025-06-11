# cs628-pe06-MorrisChristian

# Input
Creating the CitiesApp project that contains AddCity, Cities, components, AddCountry, and Countries in src folder, and the theme.js file. Installing needed React Navigation packages for the app and dependencies into the Expo managed project The code defines the main component of a React Native app using the NavigationContainer component from the @react-navigation/native and createBottomTabNavigator. In this week’s PE, the application is updated by creating Stack Navigator and add Screens to the “CitiesNav” tab.

# Process
Creating a theme file with a primary color (theme.js) under src folder Creating a reusable component “CenterMessage.js” file under .src/components Creating AddCity.js under .src/AddCity, Cities.js under .src/Cities, AddCountry.js under .src/AddCountry, and Countries.js under .src/Countires The “App.js” file contains the navigation logic. Adding a a stack-based navigation between Countries and Country in the CountriesNav.

# Output
The app contains four bottom tabs: Cities, Add City, Countries, Add Country The Add City screen allows users to input the city name and country name via the textbox and submit the data The Add Country screen allows users to input country name and its currency via the textbox and submit the data The Cities screen contains the input submitted in Add City The Countries screen contains the input submitted in Add Countries. A stack-based navigation between Countries and Country is create that shows the currency name and information.
