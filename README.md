# Assignment1sem3
Temperature Monitor Using EventEmitter

Project Description

This project demonstrates the use of Node.js EventEmitter to create a custom TemperatureMonitor class.

The program monitors temperature changes and emits different events based on the temperature value.

Features

1. temperatureChanged: Emitted every time the temperature changes.
2. highTemperature: Emitted when the temperature reaches or crosses 40°C.
3. normalTemperature: Emitted when the temperature drops below 40°C after being in the high-temperature state.

Technologies Used

- Node.js
- JavaScript
- Events Module (EventEmitter)

Implementation

A custom class named "TemperatureMonitor" is created by extending the built-in EventEmitter class.

The "setTemperature(t)" method updates the temperature and emits the appropriate events.

The program also tracks the previous temperature state to ensure that highTemperature and normalTemperature events are emitted only when the temperature state changes.

How to Run the Project

Step 1: Install Node.js on your system.

Step 2: Open the project folder in VS Code.

Step 3: Open the terminal.

Step 4: Run the following command:

node TemperatureMonitor.js

Expected Output

The program displays temperature changes and generates a warning when the temperature reaches 40°C or above. When the temperature drops below 40°C, it displays a normal temperature notification.

Conclusion

This project demonstrates how EventEmitter works in Node.js. It helps understand custom events, event listeners, event handling, and state tracking in asynchronous JavaScript applications.