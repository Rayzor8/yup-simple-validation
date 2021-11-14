import React, { useState } from 'react';
import { userSchema } from '../../validation/UserValidation';

const Form = () => {
   const [validation, setValidation] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();
      let formData = {
         email: e.target[0].value,
         username: e.target[1].value,
         password: e.target[2].value,
      };
      const isValid = await userSchema.isValid(formData);
      console.log(isValid);
      isValid ? setValidation(true) : setValidation(false);
   };

   const modalFailed = () => (
      <div className="m-2 bg-red-500 text-white text-xl text-center p-2 rounded">
         VALIDATION FAILED
      </div>
   );
   const modalSuccess = () => (
      <div className="m-2 bg-green-500 text-white text-xl text-center p-2 rounded">
         VALIDATION SUCCESS
      </div>
   );

   return (
      <div className="bg-white p-10 rounded-lg">
         <form
            className="flex flex-col md:w-96 max-w-full mx-auto"
            onSubmit={handleSubmit}
         >
            {validation === null
               ? null
               : validation === false
               ? modalFailed()
               : modalSuccess()}
            <label className="text-xl my-2" htmlFor="email">
               Email
            </label>
            <input
               type="email"
               placeholder="Email.."
               id="email"
               className="border-solid border-2 border-black rounded py-1 px-2"
            />
            <label className="text-xl my-2" htmlFor="username">
               Username
            </label>
            <input
               type="text"
               placeholder="Username.."
               id="username"
               className="border-solid border-2 border-black rounded py-1 px-2"
            />
            <label className="text-xl my-2" htmlFor="password">
               Password
            </label>
            <input
               type="password"
               placeholder="Password.."
               id="password"
               className="border-solid border-2 border-black rounded py-1 px-2"
            />
            <i className="text-xs my-2 text-yellow-700">
               Password min 4 Character, max 10 Character
            </i>
            <input
               type="submit"
               placeholder="Submit"
               className="cursor-pointer w-max my-4 border-solid border-2 bg-green-400 text-white text-lg rounded border-black px-6 mx-auto"
            />
         </form>
      </div>
   );
};

export default Form;
