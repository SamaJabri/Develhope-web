"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const missingSetting = "Warning: No value set to this environment variable";
const config = {
    PORT: process.env.PORT || missingSetting,
};
exports.default = config;
//# sourceMappingURL=config.js.map