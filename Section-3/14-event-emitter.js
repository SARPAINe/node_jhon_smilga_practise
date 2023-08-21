const EventEmitter = require("events");

const customeEmitter = new EventEmitter();

customeEmitter.on("response", (name, age) => {
    console.log(`Data received ${name} ${age}`);
});

customeEmitter.on("response", () => {
    console.log("Response received");
});

customeEmitter.emit("response", "shaharin", 42);
