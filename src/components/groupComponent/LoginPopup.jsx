import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '../../utils/yubSchema/authSchemeValidation';
import { userLoginApi } from '../../utils/commonapi';
import { useDispatch } from 'react-redux';
import { errorToLogin, setLoginRequest, setUserDetails } from '../../reducers/auth';
import { useAuthContext } from '../contentApi/AuthContext';

const LoginPopup = ({ open, setOpen }) => {
  const { closeAuthPopup } = useAuthContext();

  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(
      loginValidationSchema
    ),
    mode: "onSubmit",
    reValidateMode: "onBlur"
  })

  const { errors } = formState;

  const handleSubmitLogin = async (data) => {
    try {
      dispatch(setLoginRequest());
      const response = await userLoginApi(data);
      if (response) {
        const { data: { data, success, token } } = response;
        const objData = {
          userToken: token,
          userInfo: data,
          success: success
        }
        dispatch(setUserDetails(objData));
        closeAuthPopup();
      }
      reset();
    } catch (error) {
      const errorData = {
        error: error
      }
      dispatch(errorToLogin(errorData));
      console.log("🚀 ~ reviewHandleSubmit ~ error:", error);
      handleLoginApiError(error);
    }
  }

  const handleLoginApiError = (error) => {
    let errorMessage = 'An error occurred';
    if (error?.response) {
      errorMessage = error?.response?.data?.message;
    } else if (error?.request) {
      errorMessage = 'No response received from server';
    }
    console.log("🚀 ~ handleLoginApiError ~ errorMessage:", errorMessage)
  };


  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="w-full relative transform overflow-hidden rounded-none bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-md data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >

              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col gap-6">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1.5">
                    <DialogTitle as="h3" className="text-xl font-medium text-black">
                      Login
                    </DialogTitle>
                    <p className='m-0 text-base text-gray-500'>Please enter your e-mail and password:</p>
                  </div>

                  <div className="icon cursor-pointer" onClick={() => setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <form onSubmit={handleSubmit(handleSubmitLogin)}>
                  <div className="flex flex-col gap-6">
                    <div className='input-wrapper'>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Your Email'
                        autoComplete="given-name"
                        {...register('email')}
                        className="block w-full rounded-none border-0 py-1.5 px-2.5 text-gray-900 shadow-sm border-1 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                      />
                      <small className='text-danger err'>{errors?.email?.message}</small>
                    </div>
                    <div className='input-wrapper'>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder='Your Password'
                        autoComplete='new-password'
                        {...register('password')}
                        className="block w-full rounded-none border-0 py-1.5 px-2.5 text-gray-900 shadow-sm border-1 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                      />
                      <small className='text-danger err'>{errors?.password?.message}</small>
                    </div>
                    <button
                      className="inline-flex w-full justify-center rounded-none bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default LoginPopup
