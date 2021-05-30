import {call, all} from 'redux-saga/effects';
import tokenPriceSaga from './TokenPriceSaga';
import walletSaga from './WalletSaga';

export default function* rootSaga() {
    yield all([walletSaga(), tokenPriceSaga()])
}