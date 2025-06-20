"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelPredictController = exports.getBookingCancelPredictionController = void 0;
const cancel_predict_service_1 = require("./cancel.predict.service");
const catchAsyncHandeller_1 = require("../../utils/catchAsyncHandeller");
exports.getBookingCancelPredictionController = (0, catchAsyncHandeller_1.catchAsyncHandeller)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield cancel_predict_service_1.cancelPredictService.getBookedRoomsWithCancelPrediction();
    res.status(200).json({
        success: true,
        data,
    });
}));
exports.cancelPredictController = {
    getBookingCancelPredictionController: exports.getBookingCancelPredictionController
};
