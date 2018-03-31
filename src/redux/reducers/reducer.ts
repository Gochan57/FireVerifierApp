import {Action} from '../../models/actions'
import * as Model from '../../models'
import * as Default from '../../models/default'

const reducer = (state = Default.AppState, action: Action): Model.AppState => {
    switch (action.type) {

    }
    return state
}

export default reducer