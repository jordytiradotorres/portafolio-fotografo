import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/database'
import './config'
import { signIn, signOut } from './auth'

import tplHome from '../html/home.tpl.html'
import tplAbout from '../html/about.tpl.html'
import tplContact from '../html/contact.tpl.html'
import tplAdmin from '../html/admin.tpl.html'
import tplAdminAuth from '../html/admin_auth.tpl.html'

const routes = () => {
    const d = document,
        main = d.querySelector('.Main')

    d.addEventListener('DOMContentLoaded', e => {
        main.innerHTML = tplHome
    })
    
    d.addEventListener('click', e => {
        if (e.target.matches('a[href="#"]')) {
            e.preventDefault()
        } 
    
        // si tiene id="home", asignale todo lo que tiene el home.tpl.html
        if (e.target.matches('#home')) {
            main.innerHTML = tplHome
        } else if (e.target.matches('#about')) {
            main.innerHTML = tplAbout
        } else if (e.target.matches('#contact')) {
            main.innerHTML = tplContact
        } else if (e.target.matches('#admin')) {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    main.innerHTML = tplAdminAuth
                } else {
                    main.innerHTML = tplAdmin
                }
            })
        } else if (e.target.matches('#login')) {
            signIn()
        } else if (e.target.matches('#logout')) {
            signOut()
        }
    })
}

export default routes