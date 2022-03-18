import {url,login_username,login_password} from '../../../config'
import Navbar from '../../Page-Objects/Components/Navbar'
import LoginPage from '../../Page-Objects/Pages/LoginPage';
describe('Login Failed Test',()=>{
    before(function(){
        cy.visit(url)
        Navbar.clickSignIn()
    })
    it('Should try to login with invalid credentials',()=>{
        LoginPage.login('invalid username','invalid password')

    })
    it('should display error message',()=>{
       LoginPage.displayErrorMessage() 
    })

})
describe('Login Success Test',()=>{
    before(function(){
        cy.visit(url)
        Navbar.clickSignIn()
    })
    it('should login into application',()=>{
        LoginPage.login(login_username,login_password)
    })
    it('should logout from application',()=>{
        Navbar.logout()
        Navbar.displaySignInButton()
    })

})
