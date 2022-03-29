import { createStore } from 'vuex'
import router from '../router/index.js'
import firebaseApp from '../firebase.js'
import { getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, getFirestore } from "firebase/firestore";


const auth = getAuth();
const db = getFirestore(firebaseApp)

export default createStore({
    state: {
        user: null
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user
        },

        CLEAR_USER(state) {
            state.user = null
        }
    },

    actions: {
        async login({ commit }, details) {
            const { email, password } = details

            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert("User not found")
                        break
                    case 'auth/wrong-password':
                        alert("Wrong password")
                        break
                    default:
                        alert("Something went wrong")
                }
                return
            }

            commit('SET_USER', auth.currentUser);
            router.push('/home');
        },

        async register({ commit }, details) {
            // const { fname, lname, email, password, role } = details
            const { fname, lname, email, password, role } = details
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                // console.log(role);
                // console.log(fname);
                await updateProfile(auth.currentUser, {
                    displayName: fname,
                    photoURL: role
                });
                if (role == "Student") {
                    await setDoc(doc(db, "Students", email), {
                        ID: email,
                        Name: fname + " " + lname,
                        wk_eng: 0,
                        wk_math: 0,
                        wk_sci: 0,
                        scores:{
                            sci:{},
                            eng:{},
                            math:{}
                        }
                    })
                } else {
                    await setDoc(doc(db, "Teachers", email), {
                        ID: email,
                        Name: fname + " " + lname,
                    })
                }

            } catch (error) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert("Email already in use")
                        break
                    case 'auth/invalid-email':
                        alert("Invalid email used")
                        break
                    case 'auth/operation-not-allowed':
                        alert("Operation not allowed")
                        break
                    case 'auth/weak-password':
                        alert("Weak password")
                        break
                    default:
                        alert("Something went wrong")
                }
                return
            }

            commit('SET_USER', auth.currentUser)
            router.push('/home')
        },

        async logout({ commit }) {
            await signOut(auth);
            commit('CLEAR_USER');
            router.push('/');
        }
    },

})