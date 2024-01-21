import {  Form, Field, ErrorMessage,defineRule,configure } from "vee-validate"
import { required,email,min } from "@vee-validate/rules"
import { localize } from "@vee-validate/i18n"
export default (app)=>{
   defineRule('required',required)
   defineRule('email',email)
   defineRule('min',min)
   defineRule('unique',(value)=>{
    if(value==='aqib@dev8@gmail.com')
    return false;
    else
    return true;
   })
   configure({
    generateMessage:localize('en',{
      messages:{
        required:'{field} Field is Required',
        email:'{field} must be valid email',
        min:'{field} must be 0:{min} character long',
        unique:'{field} must be unique'
      }
    })
   })
   app.component('VeeForm',Form)
   app.component('VeeField',Field)
   app.component('VeeErrorMessage',ErrorMessage)
}