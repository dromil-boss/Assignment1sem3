const EventEmitter = require('events');

class TemperatureMonitor extends EventEmitter {
    constructor() {
        super();
        this.temperature = null;
        this.isHighTemperature = false;
    }

    setTemperature(t) {
        const previousState = this.isHighTemperature;

        this.temperature = t;

        // Emit temperatureChanged every time
        this.emit('temperatureChanged', t);

        // Check if temperature reaches or crosses 40°C
        if (t >= 40 && !previousState) {
            this.isHighTemperature = true;
            this.emit('highTemperature', t);
        }

        // Check if temperature drops below 40°C
        else if (t < 40 && previousState) {
            this.isHighTemperature = false;
            this.emit('normalTemperature', t);
        }
    }
}

// Create object
const monitor = new TemperatureMonitor();

// Listen for temperatureChanged event
monitor.on('temperatureChanged', (t) => {
    console.log(`Temperature changed to: ${t}°C`);
});

// Listen for highTemperature event
monitor.on('highTemperature', (t) => {
    console.log(`Warning! High temperature: ${t}°C`);
});

// Listen for normalTemperature event
monitor.on('normalTemperature', (t) => {
    console.log(`Temperature is back to normal: ${t}°C`);
});

// Test different temperatures
monitor.setTemperature(30);
monitor.setTemperature(35);
monitor.setTemperature(40);
monitor.setTemperature(45);
monitor.setTemperature(38);
monitor.setTemperature(32);