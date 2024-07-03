import erroricon from "./assets/images/icon-error.svg";
import React, { useState } from "react";

export default function SignUpForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formValidation, setFormValidation] = useState({ firstName: false, lastName: false, email: false, password: false });
    const [formError, setFormError] = useState({ firstName: false, lastName: false, email: false, password: false });

    function validationForm() {
        const firstNameValid = /^[a-zA-Z]+$/.test(firstName); // only letters
        const lastNameValid = /^[a-zA-Z]+$/.test(lastName); // only letters
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // basic email format
        const passwordValid = password.length >= 8; // at least 8 characters

        const newForm = {
            firstName: !firstName,
            lastName: !lastName,
            email: !email,
            password: !password,
        }
        setFormValidation(newForm);
        const newFormError = {
            firstName: !firstNameValid,
            lastName: !lastNameValid,
            email: !emailValid,
            password: !passwordValid,
        };
        setFormError(newFormError);

        if(Object.values(newFormError).every(field => !field)){
            alert("the form is submited successfully");
        }

    }

    
    return (
        <>
            <div className="grid grid-cols-2  md:grid-cols-1 gap-10  h-[500px]">
                <div className="flex flex-col justify-center md:justify-start md:items-center">
                    <h1 className="text-white font-poppins font-bold text-[45px] md:text-[30px]  md:text-center ">Learn to code by <br /> watching others</h1>
                    <p className="text-white font-poppins font-normal text-[15px] md:px-6 md:text-[12px] md:text-center opacity-[80%] ">See how experienced developers solve problems in real-time. Watching scripted tutorials is great but understanding how developers think is invaluable</p>
                </div>
                <div className="grid grid-rows-[10%_90%] gap-6 md:grid-rows-[70px_460px] w-[90%]  md:m-auto h-full md:h-auto md:pb-10 ">
                    <div className="free bg-blue rounded-lg flex justify-center items-center ">
                        <h1 className="font-poppins font-bold text-base text-center px-2 text-white md:px-6  ">Try it free 7 days <span className="font-normal text-[14px] font-poppins  text-white opacity-85">then $20\mo. thereafter</span></h1>
                    </div>
                    <div className="form bg-white rounded-lg flex p-10 ">
                        <div className='grid grid-rows-5 w-full h-[400px] '>
                            <div className="relative grid grid-rows-1 md:gap-9">
                                <input type="text" onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName} placeholder={formValidation.firstName || formError.firstName ?"" :"First Name" }
                                    className={`px-4 border border-grayishBlue h-12 rounded focus:border-blue focus:ring-1 focus:outline-blue focus:ring-blue md:h-12 ${formValidation.firstName ? "border border-red focus:border-red focus:ring-1 focus:outline-red focus:ring-red" : ""} `} />
                                {formValidation.firstName && (<>
                                    <span className=" text-red text-[10px] font-poppins text-end mt-[-30px]">First Name  cannot be empty</span>
                                    <img src={erroricon} alt="Error" className="absolute right-2 top-3 " />

                                </>)}
                                {formError.firstName && !formValidation.firstName && (
                                    <>
                                        <span className="text-red text-[10px] font-poppins text-end mt-[-30px]">Only Letters"A-Z" </span>
                                        <img src={erroricon} alt="Error" className="absolute right-2 top-3 " />
                                    </>

                                )}
                            </div>
                            <div className="relative grid grid-rows-1 md:gap-9">
                                <input type="text"
                                    onChange={(e) => setLastName(e.target.value)} value={lastName}
                                    placeholder={formValidation.lastName || formError.lastName ?"" :"First Name" }
                                    className={`px-4 border border-grayishBlue h-12 rounded focus:border-blue focus:ring-1 focus:outline-blue focus:ring-blue md:h-12 ${formValidation.lastName ? "border border-red focus:border-red focus:ring-1 focus:outline-red focus:ring-red" : ""} `} />
                                    {formValidation.lastName && (
                                    <>
                                        <span className="text-red text-[10px] font-poppins text-end mt-[-30px]">Last Name  cannot be empty</span>
                                        <img src={erroricon} alt="Error" className="absolute right-2 top-3 " />
                                    </>

                                )}
                                {formError.lastName && !formValidation.lastName && (
                                    <>
                                        <span className="text-red text-[10px] font-poppins text-end mt-[-30px]">Only Letters"A-Z" </span>
                                        <img src={erroricon} alt="Error" className="absolute right-2 top-3 " />
                                    </>

                                )}
                            </div>
                            <div className="relative grid grid-rows-1 md:gap-9">
                                <input type="email"
                                    onChange={(e) => setEmail(e.target.value)} value={email} name="email" id="email"
                                    placeholder={formValidation.email || formError.email ? "email@example.com" :"email"}
                                    className={`px-4 border h-12 border-grayishBlue rounded focus:outline-blue focus:border-blue focus:ring-1 focus:ring-blue md:h-12  ${formValidation.email ? "border border-red focus:border-red focus:ring-1 focus:outline-red focus:ring-red placeholder:text-red  placeholder:font-bold " : ""} `} />
                                {formValidation.email && (
                                    <> <span className="text-red text-[10px] font-poppins text-end mt-[-30px]">Email  cannot be empty</span>
                                        <img src={erroricon} alt="Error" className="absolute right-2 top-3 " />
                                    </>)}
                                {formError.password && !formValidation.email && (
                                    <>
                                        <span className="text-red text-[10px] font-poppins text-end mt-[-30px]"> Looks like this is not an email </span>
                                        <img src={erroricon} alt="Error" className="absolute right-2 top-3 " />
                                    </>

                                )}
                                
                            </div>

                            <div className="relative grid grid-rows-1 md:gap-9">
                                <input type="password" onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    placeholder={formValidation.firstName || formError.firstName ?"" :"Password" }
                                    className={`px-4 border border-grayishBlue h-12 rounded focus:border-blue  focus:outline-blue focus:ring-blue md:h-12 ${formValidation.password ? "border border-red focus:border-red focus:ring-1 focus:outline-red focus:ring-red" : ""} `} />
                                {formValidation.password && (
                                    <><span className="text-red text-[10px] font-poppins text-end mt-[-30px] ">Password cannot be empty</span>
                                        <img src={erroricon} alt="Error" className="absolute right-2 top-3 " />
                                    </>
                                )}
                                {formError.password && !formValidation.password && (
                                    <>
                                        <span className="text-red text-[10px] font-poppins text-end mt-[-30px]"> at least 8 characters </span>
                                        <img src={erroricon} alt="Error" className="absolute right-2 top-3 " />
                                    </>

                                )}
                            </div>
                            <div className="grid grid-rows-1  md:gap-11">
                                <button onClick={validationForm} className="text-white bg-green rounded font-poppins font-normal h-12 md:h-12 mt-2 "> CLAIM YOUR FREE TRIAL </button>
                                <p className="text-gray-400 font-poppins font-normal mt-4 text-[10px] text-center md:px-5 ">By clicking the button, you are agreeing to our <span className=" font-bold text-red">Terms and Services</span></p>
                            </div>




                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}