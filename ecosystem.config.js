module.exports = {
  apps: [
    {
      name: "DravoAPI",
      script: "./index.js",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["node_modules", "log-*.txt", ".git", ".vscode"],
      error_file: "log-error.txt",
      out_file: "log-output.txt",
      watch_options: {
        followSylinks: false,
      },
    },
  ],
};
