import React from 'react'
import logo from '../img/logo.svg'
import illustration from '../img/illustration-dashboard.png'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ComingSoonPage = () => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const validateEmail = (e) => {
      if(e.value && e.value.match(isValidEmail)){
        return true;
      }else{
       return false;
      }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const invalideText = document.getElementById("invalidEmailText");
        const invalidInput = document.getElementById("invalidEmailInput");
        console.log("Submit captured: " + invalidInput.value);
        if(validateEmail(invalidInput)){
            console.log("VALID");
            invalideText.classList.add("hidden");
            invalidInput.classList.remove("border-red-500");
            invalidInput.value = "";
            toast.success("Thanks for signing up!");
            //document.mainForm.submit();
        }else{
            invalideText.classList.remove("hidden");
            invalidInput.classList.add("border-red-500");
        }
    }
  return (
    <>
        <div className="flex flex-col items-center p-6 py-16 h-full">
            <div className="mb-10">
                <img className="w-16 md:w-20" src={logo} alt='Logo' />
            </div>
            <div className="mb-10">
                <h1 className="text-2xl text-pingGray font-pingLibreFranklin font-light mb-4 md:text-5xl">We are launching <b className='text-black font-bold'>soon!</b></h1>
                <p className="text-sm text-center text-pingGray font-pingLibreFranklin justify-center md:text-lg md:flex">Subscribe and get notified</p>
            </div>
            <div className="flex flex-col w-full items-center mb-20">
                <form name="mainForm" className="flex flex-col w-full md:flex-row md:flex-wrap" onSubmit={onSubmitHandler}>
                    <div className="mb-4 flex flex-col md:basis-2/3 md:mb-0 md:pr-4">
                        <input id="invalidEmailInput" className="border-2 border-pingPaleBlue rounded-full py-3 px-6 text-sm text-pingPaleBlue font-pingLibreFranklin" placeholder='Your email address...' type='text' />
                        <p id="invalidEmailText" className="hidden text-red-500 text-center text-sm font-thin mt-2 md:basis-full"><i>Please provide a valid email</i></p>
                    </div>
                    <div className="md:basis-1/3">
                        <button className="rounded-full py-3 px-6 text-sm text-white bg-pingBlue font-pingLibreFranklin w-full">Notify me</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col items-center justify-end">
                <img src={illustration} alt="illustration" />
            </div>
            <div className="list-none flex flex-col items-end justify-end h-full">
                <ul className="flex flex-row justify-between px-12 mb-6 w-full">
                    <li className="border-2 border-pingLightGray rounded-full px-[7px] py-[5px] cursor-pointer"><i className="fa-brands fa-facebook-f w-5 h-5 text-center items-center leading-5 text-pingBlue"></i></li>
                    <li className="border-2 border-pingLightGray rounded-full px-[7px] py-[5px] cursor-pointer"><i className="fa-brands fa-twitter w-5 h-5 text-center items-center leading-5 text-pingBlue"></i></li>
                    <li className="border-2 border-pingLightGray rounded-full px-[7px] py-[5px] cursor-pointer"><i className="fa-brands fa-instagram w-5 h-5 text-center items-center leading-5 text-pingBlue"></i></li>
                </ul>
                <div className="mb-6">
                    <p className="text-sm text-pingGray font-light">
                        © Copyright Ping. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ComingSoonPage
