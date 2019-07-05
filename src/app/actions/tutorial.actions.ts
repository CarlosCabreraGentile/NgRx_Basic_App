/*
An action in NgRX store is two things basically, 
first its a type in the form of a string and its basically describes whats happening
like for instance it could be had info or remove info or update info 
and the second it contains an optional payload of data so, in case
of adding info that payload would be like the name in the url
and you dont always have to have the payload of data,
like in the case of if youre going to increment some type of number like a view counter
you wouldnt need any data to pass along, you would just need that type or which is that string
likes for instance increment info count or something like that
*/

import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

//TYPE OF THE ACTION
export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

//Create a class for each of our actions with this constructor
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial
