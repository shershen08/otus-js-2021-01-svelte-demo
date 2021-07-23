import { writable } from 'svelte/store';

const count = writable(23);
// let value = 23

// count.subscribe((val) => {
//     value = val
// })

export const countStore = {
    subscribe: count.subscribe,
    setToZero: function(){
        console.log('setToZero')
        count.set(0)
    },
    setToValue: function(value){
        count.update(oldStoreVal => oldStoreVal + value)
    }
}