import { createStore } from 'vuex'
import router from '../router/index.js'
import firebaseApp from '../firebase.js'
import { getAuth, signInWithEmailAndPassword, signOut, updatePassword, updateProfile } from "firebase/auth"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, getFirestore, getDoc, updateDoc } from "firebase/firestore";


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
                await updateProfile(auth.currentUser, {
                    displayName: fname,
                });
                await setDoc(doc(db, "Users", email), {
                    ID: email,
                    role: role,
                })
                if (role == "Student") {
                    await setDoc(doc(db, "Students", email), {
                        ID: email,
                        Name: fname + " " + lname,
                        wk_eng: 0,
                        wk_math: 0,
                        wk_sci: 0
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

        async editProfile({ commit }, details) {
            // const { fname, lname, email, password, role } = details
            const { fname, lname, password } = details
            // update displayname to fname, update in either Student or Teacher collection
            // the Name to fname + lname
            let email = auth.currentUser.email;
            
            try {
                await updatePassword(auth.currentUser, password);
                await updateProfile(auth.currentUser, {
                    displayName: fname,
                });
                let docRef = doc(db, "Users", email);
                let docSnap = await getDoc(docRef);
                let role = docSnap.data().role;
                if (role == "Student") {
                    await updateDoc(doc(db, "Students", email), {
                        Name: fname + " " + lname,
                    })
                } else {
                    await updateDoc(doc(db, "Teachers", email), {
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
            router.push('/profile')
        },

        async logout({ commit }) {
            await signOut(auth);
            commit('CLEAR_USER');
            router.push('/');
        }
    },

})