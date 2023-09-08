"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserData = exports.addUSerToDB = void 0;
const addUSerToDB = (uname, pass, age) => {
    console.log(uname, pass, age);
    return "Registeration Complete";
};
exports.addUSerToDB = addUSerToDB;
const UpdateUserData = (objUser) => {
    console.log(objUser.uname);
    return "Update Complete";
};
exports.UpdateUserData = UpdateUserData;
