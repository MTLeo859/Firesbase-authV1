import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    try {
        const userCredencials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredencials)

        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

        showMessage("Bienvenido " + userCredencials.user.email)

    } catch (error) {

        if(error.code === 'auth/email-already-in-use'){
            showMessage("El correo ya esta en uso", "error")
        }else if (error.code === 'auth/network-request-failed') {
            showMessage("Correo Invalido", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("La contraseña es muy corta", "error")
        } else if (error.code){
            showMessage("Algo salio mal", "error")
        }

    }
})