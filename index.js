const ReactNative = require('react-native')
const { Buffer } = require('buffer')
const { NativeModules, DeviceEventEmitter } = ReactNative
const BluetoothSerial = NativeModules.BluetoothSerial

/**
 * Listen for available events
 * @param  {String} eventName Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {Function} handler Event handler
 */
BluetoothSerial.on = (eventName, handler) => {
  DeviceEventEmitter.addListener(eventName, handler)
}

/**
 * Write data to device, you can pass string or buffer,
 * We must convert to base64 in RN there is no way to pass buffer directly
 * @param  {Buffer|String} data
 * @return {Promise<Boolean>}
 */
BluetoothSerial.write = (data) => {
  return BluetoothSerial.writeToDevice(data)
}

module.exports = BluetoothSerial
