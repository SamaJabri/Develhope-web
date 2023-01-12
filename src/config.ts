const missingSetting = "Warning: No value set to this environment variable";

const config = {
  PORT: process.env.PORT || missingSetting,
};

export default config;
