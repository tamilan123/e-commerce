import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { VerifyEmailApi } from '../utils/commonapi';
import Lottie from 'lottie-react';
import successLotties from '../images/lottie/success-lottie.json';
import failedLotties from '../images/lottie/failed-lottie.json';

const EmailVerify = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to programmatically navigate

  const [verificationStatus, setVerificationStatus] = useState({
    loading: true,
    success: false,
    message: '',
  });

  useEffect(() => {

    // Call the API to verify the email
    const verifyEmail = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');

      try {
        const response = await VerifyEmailApi(token); // Replace with your backend API URL
        if (response) {
          setVerificationStatus({
            loading: false,
            success: true,
            message: response?.data?.message
          });
        }
      } catch (error) {
        setVerificationStatus({
          loading: false,
          success: false,
          message: 'Invalid or expired token. Please try again.'
        });
      }
    };

    verifyEmail();
  }, [location]);

  if (verificationStatus.loading) {
    return <div>Verifying your email...</div>;
  }
  console.log(verificationStatus);
  return (
    <section className='bg-gray-200 min-h-dvh'>
      <div className="min-h-dvh flex items-center justify-center p-6">
        <div className={`p-6 border rounded-xl min-w-md max-w-md bg-white shadow-lg w-full min-w-80`}>
          <div className="max-w-[5rem] mx-auto mb-3">
            {
              verificationStatus.success ? <Lottie animationData={successLotties} loop={false} /> : <Lottie animationData={failedLotties} loop={false} />
            }
          </div>
          <div className="flex flex-col gap-1">
            <h2 className={`text-lg m-0 text-center font-semibold`}>
              {verificationStatus.success ? 'Success' : 'Error'}
            </h2>
            <p className={`m-0 text-center ${verificationStatus.success ? 'text-green-700' : 'text-red-700'}`}>
              {verificationStatus.message}
            </p>
            <button
              className="inline-flex w-full justify-center rounded-lg mt-4 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black"
              onClick={() => navigate('/', { replace: true })} // Redirect to home page
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailVerify;
