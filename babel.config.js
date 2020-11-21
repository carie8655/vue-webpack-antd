module.exports = {
  presets: ["@babel/env"],
  plugins: [
    [
      "import",
      {
        libraryName: "antd",
        style: true,
      },
    ],
  ],
};
