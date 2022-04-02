import { createStore } from 'vuex'
import router from '../router/index.js'
import firebaseApp from '../firebase.js'
import { getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { ref } from "vue"

const auth = getAuth();
const db = getFirestore(firebaseApp)
var userrole = ref("Hello");

export default createStore({
    state: {
        user: null
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user
            user.role = userrole
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
                if (role == "P5Student" || role == "P6Student") {
                    await setDoc(doc(db, "Students", email), {
                        ID: email,
                        Name: fname + " " + lname,
                        role: role,
                        wk_eng: 0,
                        wk_math: 0,
                        wk_sci: 0,
                        scores:{
                            sci:{},
                            eng:{},
                            math:{}
                        },
                        timetable:{
                            satTenToTwelve: true,
                            sunTenToTwelve: true,
                            satTwelveToTwo: true,
                            sunTwelveToTwo: true,
                            monTwoToFour: true,
                            tuesTwoToFour: true,
                            wedsTwoToFour: true,
                            thursTwoToFour: true,
                            friTwoToFour: true,
                            satTwoToFour: true,
                            sunTwoToFour: true,
                            monFourToSix: true,
                            tuesFourToSix: true,
                            wedsFourToSix: true,
                            thursFourToSix: true,
                            friFourToSix: true,
                            satFourToSix: true,
                            sunFourToSix: true,
                            monSixToEight: true,
                            tuesSixToEight: true,
                            wedsSixToEight: true,
                            thursSixToEight: true,
                            friSixToEight: true,
                            satSixToEight: true,
                            sunSixToEight: true,
                        }
                    },
                    await setDoc(doc(db, "Achievements", email), {
                        loading:false,
                        firststeps: true,
                        firstmaths: false,
                        smile:false,
                    }))
                } else {
                    await setDoc(doc(db, "Teachers", email), {
                        ID: email,
                        Name: fname + " " + lname,
                        role: role,
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
            commit('SET_USER', auth.currentUser);
            router.push('/home');
        },

        async logout({ commit }) {
            await signOut(auth);
            commit('CLEAR_USER');
            router.push('/');
        }
    },

})