module.exports = {
  apps: [
    {
      name: "cgproject",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3059",
      cwd: "/home/digilogy-cgproject/htdocs/cgproject.digilogy.dev",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3059,
      },
    },
  ],
};
