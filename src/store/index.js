import { createStore } from 'vuex';
import router from '../router';

import { createToaster } from "@meforma/vue-toaster";

// firebase imports
import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithRedirect,
    GoogleAuthProvider,
    GithubAuthProvider,
    getRedirectResult
} from 'firebase/auth';

const toaster = createToaster({
    position: "bottom",
    duration: 3000,
});

const store = createStore({
    state: {
        user: null,
        authIsReady: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload;
        }
    },
    actions: {
        async signup(context, { email, password }) {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password);
                if (res) {
                    context.commit('setUser', res.user);
                    context.commit('setAuthIsReady', true);
                    toaster.success('Signup successful');
                    router.push('/');
                }
            } catch (error) {
                let errorMessage = 'Could not complete signup. Please try again.';
                if (error.code === 'auth/email-already-in-use') {
                    errorMessage = 'Email address is already in use.';
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = 'Invalid email address.';
                } else if (error.code === 'auth/weak-password') {
                    errorMessage = 'Password should be at least 6 characters.';
                }
                toaster.error(errorMessage);
            }
        },
        async login(context, { email, password }) {

            const res = await signInWithEmailAndPassword(auth, email, password);
            if (res) {
                context.commit('setUser', res.user);
                commit('setAuthIsReady', true);
                router.push('/');
            } else {
                toaster.error('could not complete login');
            }
        },
        async logout(context) {

            await signOut(auth);
            context.commit('setUser', null);
        },
        async loginGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider)
                .then((result) => {
                    commit('setUser', result.user);
                    commit('setAuthIsReady', true);
                    router.push('/');
                })
                .catch((error) => {
                    toaster.error("An error occurred during Google login!");
                });
        },
        async loginGithub() {
            const provider = new GithubAuthProvider();
            signInWithRedirect(auth, provider)
                .then((result) => {
                    commit('setUser', result.user);
                    commit('setAuthIsReady', true);
                    router.push('/');
                })
                .catch((error) => {
                    toaster.error("An error occurred during GitHub login!");
                });
        },
        async handleRedirect({ commit }) {
            try {
                const result = await getRedirectResult(auth);
                if (result) {
                    commit('setUser', result.user);
                    commit('setAuthIsReady', true);
                }
            } catch (error) {
                toaster.error(error.message);
            }
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        authIsReady(state) {
            return state.authIsReady;
        }
    }
});

// wait until auth is ready
const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setAuthIsReady', true);
    store.commit('setUser', user);
    unsub();
});

// export the store
export default store;
