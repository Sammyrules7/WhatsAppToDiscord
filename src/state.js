module.exports = {
  settings: {
    Whitelist: [],
    DiscordPrefixText: null,
    DiscordPrefix: false,
    WAGroupPrefix: false,
    UploadAttachments: true,
    Token: '',
    GuildID: '',
    Categories: [],
    ControlChannelID: '',
    LocalDownloads: false,
    LocalDownloadMessage: 'Downloaded a file larger than 8MB, check it out at {abs}',
    DownloadDir: './downloads',
    Publish: false,
    ChangeNotifications: false,
    autoSaveInterval: 5 * 60,
    lastMessageStorage: 500,
    oneWay: 0b11
  },
  dcClient: null,
  waClient: null,
  chats: {},
  contacts: {},
  startTime: Math.round(Date.now() / 1000),
  logger: null,
  lastMessages: null,
  goccRuns: {},
};
