import * as Model from '../models'

export interface State {
    nfc: boolean,
    ok: boolean,
}

export interface AppState {
    app: State
}