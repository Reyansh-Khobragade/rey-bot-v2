module.exports = (client) => {
    console.log('Im alive as ' + client.user.tag)

    const activities = [`${client.guilds.cache.size} servers!`, `over ${client.users.cache.size} users!`]

    setInterval(() => {
        let activity = activities[Math.floor(Math.random() * activities.length)]
        client.user.setActivity(activity, {type: "WATCHING"})
    }, 5000)
}