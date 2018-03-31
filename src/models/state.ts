import * as Model from '../models'

export interface AppState {
    nfc: boolean,
    ok: boolean,
    comment: string
}

export interface State {
    app: AppState
}