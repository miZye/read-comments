"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
const file_1 = require("./file");
const util = new util_1.Utilities();
class json extends file_1.file {
    constructor() {
        super(...arguments);
        this.output = "";
    }
    getObjects(file) {
        this.output = util.getCode(file);
        return this.output;
    }
}
exports.json = json;
