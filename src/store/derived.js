import { derived } from 'svelte/store';
import {user} from './user'
import {cart} from './cart'

const userDerived = derived([user, cart], ([a, b], set) => {

    if(a.loading == false && a.error == false && b.length > 0){
        set(true)
    }

}, false)