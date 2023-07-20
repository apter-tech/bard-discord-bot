export default {
    cookie: process.env.BARD_SESSION_ID || "COOKIE", // "__Secure-1PSID" cookie value form bard.google.com
    token: process.env.DISCORD_TOKEN || "TOKEN", // discord.com/developer (Discord Bot Token)
    messageCommand: process.env.MESSAGE_COMMAND || false // "true" to enable "!ask" command (requires MessageContent intent)
}
