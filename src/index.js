const primus = require('./primus.js'),
      ircJS = require('ircjs')

class primusIrcJS extends ircJS {
  constructor(hostname, port, useTLS) {
    super(hostname, port, useTLS)
    this._transport = new primus('https://irc.irc7.com/') // Ignore params.
    this._setHandlers()
  }

  connect(callback) {
    super.connect(callback)
    // TODO: Make sure disconnected state or throw error
    this._transport.open()
  }

  send(data) {
    super.send(data)
    // TODO: Make sure connected state or throw error
    this._transport.write(`${ data }\r\n`)
  }

  _setHandlers() {
    super._setHandlers()
    this._transport
      .on('data', (data) => { this.emit('data', data) })
      .on('open', () => { this.emit('connect', this) })
      .on('error', (err) => { this.emit('error', err) })
      .on('end', () => { this.emit('disconnect') })
  }
}

module.exports = primusIrcJS
