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
      </main>
    </div>
  );
}
