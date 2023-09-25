"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = void 0;
const user_1 = __importDefault(require("../model/user"));
const error_1 = __importDefault(require("../helper/error"));
const getUser = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    console.log(req.userId);
    try {
      const userID = req.params.userId;
      const User = yield user_1.default.findById(userID, { name: 1, email: 1 });
      if (!User) {
        const err = new error_1.default("User does not  Exist");
        err.statusCode = 401;
        throw err;
      } else {
        resp = {
          status: "success",
          message: "User Found",
          data: { user: User },
        };
        res.status(200).send(resp);
      }
    } catch (error) {
      next(error);
    }
  });
exports.getUser = getUser;
const updateUser = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
      const userID = req.body._id;
      if (req.userId != req.body._id) {
        const err = new error_1.default("Function not allowed");
        err.statusCode = 101;
        throw err;
      }
      const User = yield user_1.default.findById(userID);
      if (!User) {
        const err = new error_1.default(" User not found");
        err.statusCode = 401;
        throw err;
      } else {
        User.name = req.body.name;
        yield User.save();
        resp = { status: "success", message: "User Data Updated", data: {} };
        res.send(resp);
      }
    } catch (error) {
      next(error);
    }
  });
exports.updateUser = updateUser;
