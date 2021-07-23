import { writable } from 'svelte/store';

export default user = writable({
    loading: true,
    error: false,
    data: []
});

export const setLoading =  (value) => {
        user.update(userState => ({
            ...userState,
            loading: value,
        }))
    }

export const setError = () => {
        user.update(userState => ({
            ...userState,
            error: true,
        }))
}