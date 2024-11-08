
module.exports = {
  id: "foo",
  area: "test_area",
  host: "test_host",
  name: "test",
  nats: ['nats://127.0.0.1:4222'],
  ip: '127.0.0.1',
  publicIp: '127.0.0.1',
  port: {
    min: 40000,
    max: 40050
  },
  monitor: 0,

  logLevel: 'trace',
  logToFile: false,
  logFilePath: 'logs/server.log',
  logModule: {
    // 模块日志等级
    debug: [],
    info: [],
    warn: [],
    error: [],
  }
};