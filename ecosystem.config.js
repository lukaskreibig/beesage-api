module.exports = {
  apps: [
    {
      name: "DravoAPI",
      script: "./index.js",
      watch: ["server", "client"],
      watch_delay: 1000,
      ignore_watch: ["node_modules", "pm2.log"],
      watch_options: {
        followSylinks: false,
      },
    },
  ],
};
