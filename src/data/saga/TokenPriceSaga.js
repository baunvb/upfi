import { put, takeLatest } from "redux-saga/effects";
import { FETCH_COINGECKO_PRICE } from "../action/TokenPriceAction";
import * as Api from "../api/Api"


function* getCoingeckoPrice() {
    try {
        yield put({type: FETCH_COINGECKO_PRICE.LOADING})
        let payload = yield Api.fetchTokenPriceCoingecko()
        yield put({type: FETCH_COINGECKO_PRICE.SUCCESS, payload})
    } catch {
        yield put({type: FETCH_COINGECKO_PRICE.ERROR, payload: "Can not get wallet coingecko price"})
    }
}

export default function* tokenPriceSaga() {
    yield takeLatest(FETCH_COINGECKO_PRICE.actionName, getCoingeckoPrice)

}