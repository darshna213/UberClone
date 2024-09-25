import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import tw from "tailwind-styled-components";
import { auth, provider } from '../firebase';


const Login = () => {
const router = useRouter();
useEffect(() => {
    onAuthStateChanged(auth, user => {
        if(user){
            router.push('/')
        }
    })
})

  return (
    <Wrapper>
        <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
        <Title>Login to access your account</Title>
        <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
    </Wrapper>
  ) 
}

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4 
`;  

const UberLogo = tw.img`
h-28 w-auto object-contain self-start
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const HeadImage = tw.img`
object-contain w-full
`
const SignInButton = tw.div`
bg-black text-white text-center py-4 mt-8 self-center w-full 
`
export default Login;