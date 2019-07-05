/*
Reducer take the incoming action and decides 
what to do with it, take the previous state 
and returns a new state based on the given action 
and the payload or the data that is coming
*/

import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)
            return state;    
        default:
            return state;
    }
}