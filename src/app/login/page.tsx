/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Login() {
  return (
    <div className='items-center justify-items-center min-h-screen p-8 pb-20'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <h1 className='text-2xl font-bold'>Write code here.</h1>
        <p>
          Reference to Figma URL:{" "}
          <a
            className='underline'
            href='https://www.figma.com/design/XDMdeM3zpe4FdvBHqiR9iN/Interview-practice?node-id=2-683&m=dev'
          >
            https://www.figma.com/design/.../Interview-practice
          </a>
        </p>
        <a
          className='underline'
          href='https://www.figma.com/design/XDMdeM3zpe4FdvBHqiR9iN/Interview-practice?node-id=2-683&m=dev'
        >
          <div className='relative border-1 border-gray-400 rounded shadow-lg'>
            <Image
              src='/figma.jpg'
              width={800}
              height={(2304 / 3840) * 800}
              alt='requirement'
            />
          </div>
        </a>
        <hr className='border-1 border-gray-400 w-full' />
        <h1 className='text-2xl font-bold'>Components</h1>
        <div className='flex flex-col gap-4'>
          <div className='font-dm-sans text-[36px] font-[700] text-[#2B3674]'>
            Sign In
          </div>
          <div className='font-dm-sans text-[#A3AED0] text-[16px]'>
            Enter your email and password to sign in!
          </div>
          <div className='font-dm-sans text-[#2B3674] text-[14px]'>Email*</div>
          <div className='font-dm-sans text-[#A3AED0] text-[14px]'>
            mail@simmmple.com
          </div>
          <div className='font-dm-sans text-[#B118FF] text-[14px] font-medium'>
            Forget password?
          </div>
          <div className='flex flex-row gap-2'>
            <div className='bg-[#B118FF] w-[18px] h-[18px] flex items-center justify-center'>
              <img src='/images/ic_check.svg' alt='check' />
            </div>
            <div className='w-[20px] h-[20px] flex items-center justify-center'>
              <img src='/images/ic_eye.svg' alt='eye' />
            </div>
            <div className='w-[20px] h-[20px] flex items-center justify-center'>
              <img src='/images/google_logo.svg' alt='google_logo' />
            </div>
          </div>

          <div className='flex flex-row gap-2'>
            <div
              className='w-[150px] h-[150px] flex items-center justify-center rounded-2xl'
              style={{
                background:
                  "linear-gradient(228deg, #E5B1FF 29.51%, #930ED6 75.05%)",
                borderRadius: "0 0 0 40px",
              }}
            >
              Background
            </div>
            <div className='w-[150px] h-[150px] flex items-center justify-center bg-[#E4E7EE]'>
              <img src='/images/logo.svg' alt='logo' />
            </div>
            <div className='w-[150px] h-[150px] flex items-center justify-center bg-[#E4E7EE]'>
              <img src='/images/company_name.svg' alt='company_name' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
