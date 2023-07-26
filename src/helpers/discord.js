const { Client, GatewayIntentBits } = require('discord.js')
const discord = require('../config/discord.js')

const token = discord.token

class Discord {
  constructor(channelType) {
    this._channelType = channelType
  }

  async initialize() {
    this._client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] })
    await new Promise((resolve, reject) => {
      this._client.on('ready', () => {
        console.log(`Bot iniciado como ${this._client.user?.tag}`)
        resolve(true)
      })
      this._client.login(token)
    })
    this.getChannel()
  }

  async sendMessage(message) {
    try {
      await this.initialize()

      await this._client.login(token)
      if (this._channel) {
        this._channel.send(message)
      } else {
        throw new Error('Canal não encontrado.')
      }
    } catch (error) {
      throw new Error('Erro ao enviar mensagem no Discord: ' + error.message)
    }
  }

  getChannel() {
    if (!this._client) throw new Error('Cliente do Discord não inicializado.')
    this._channel = this._client.channels.cache.get(discord.channel)
    if (!this._channel) throw new Error('Canal do Discord não encontrado.')
  }
}

module.exports = Discord
