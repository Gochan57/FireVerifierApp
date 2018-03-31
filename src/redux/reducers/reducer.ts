import {Action} from '../../models/actions'
import * as Model from '../../models'
import * as Default from '../../models/default'

const reducer = (state = Default.State, action: Action): Model.State => {
    switch (action.type) {

    }
    return state
}

export default reducer