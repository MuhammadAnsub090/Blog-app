import { auth, db, storage  } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

const regForm = document.querySelector('#reg-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword  = document.querySelector('#confirmpassword');
let profilePic = document.querySelector('#profile-pic');
const modalMessage = document.querySelector('#modal')


regForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
        console.log('Passwords do not match');
        modalMessage.innerHTML = 'Passwords do not match';
        return;
    }

    const files = profilePic.files[0];
    const storageRef = ref(storage, name.value);

    try {
        const snapshot = await uploadBytes(storageRef, files);
        const url = await getDownloadURL(snapshot.ref);
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
            name: name.value,
            email: email.value,
            uid: user.uid,
            profileUrl: url
        });
        window.location.href = 'sign-in.html';
    } catch (error) {
        const errorMessage = error.message;
        console.error(errorMessage);
        modalMessage.innerHTML = errorMessage;
    }
});