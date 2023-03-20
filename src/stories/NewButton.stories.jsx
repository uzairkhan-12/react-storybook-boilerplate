import React from 'react';
import Button from './Button';
import NewButton from './NewButton';
  
// Meta data about the story and 
// its respective component
export default {  
    title:"Button",
    component:Button
}
  
export const NewLogin = () => <NewButton variant='login'>Login</NewButton>
export const NewSignIn = () =><NewButton variant='sign-in'>SignIn</NewButton>