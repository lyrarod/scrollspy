export function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen w-full items-center justify-center bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="flex w-full max-w-6xl flex-col px-6 py-10 text-gray-600 dark:text-gray-400 lg:flex-row lg:py-0 xl:px-0">
        <div className="flex basis-1/2 flex-col space-y-5 lg:space-y-6 lg:pr-10">
          <h1 className="border-l-8 pl-4 text-4xl">
            <strong>Contact Us</strong>
          </h1>
          <p className="text-lg font-medium">Get in touch! 💌</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel optio
            alias sint tempora ipsa necessitatibus qui, eos tempore sed
            excepturi?
          </p>
          <div className="grid h-full w-full gap-3 xs:grid-cols-2 md:gap-6">
            <div className="flex flex-col items-center justify-center rounded bg-gray-50 py-2 shadow dark:bg-zinc-900 lg:py-0">
              <span className="mb-2 fill-emerald-600 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                </svg>
              </span>
              <span className="font-bold uppercase tracking-widest">Phone</span>
              <p>+55 21 9999-9999</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded bg-gray-50 py-2 shadow dark:bg-zinc-900 lg:py-0">
              <span className="mb-2 fill-emerald-600 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
              </span>
              <span className="font-bold uppercase tracking-widest">
                E-mail
              </span>
              <p>contact@email.com</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded bg-gray-50 py-2 shadow dark:bg-zinc-900 lg:py-0">
              <span className="mb-2 fill-emerald-600 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
              </span>
              <span className="font-bold uppercase tracking-widest">Local</span>
              <p>Rio de Janeiro, Brazil</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded bg-gray-50 py-2 shadow dark:bg-zinc-900 lg:py-0">
              <span className="mb-2 fill-emerald-600 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" />
                </svg>
              </span>
              <span className="font-bold uppercase tracking-widest">
                Social
              </span>
              <div className="mt-2 flex gap-x-4 text-3xl">
                <a
                  href="#"
                  className="fill-emerald-600 transition hover:scale-110 hover:fill-emerald-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="fill-emerald-600 transition hover:scale-110 hover:fill-emerald-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="fill-emerald-600 transition hover:scale-110 hover:fill-emerald-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex basis-1/2">
          <div className="relative mt-6 w-full lg:my-0">
            <div className="absolute right-0 top-0 z-0 h-40 w-40 rounded-full bg-gradient-to-r from-green-200 via-green-400 to-green-500" />
            <div className="absolute bottom-0 left-0 z-0 h-40 w-40 rounded-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900" />
            <form className="flex flex-col gap-y-6 rounded-xl p-5 shadow-lg backdrop-blur-3xl dark:border-none dark:shadow-emerald-500/20 md:gap-y-8 md:px-8 md:py-16">
              <p>Please send message for futher information!</p>
              <div className="flex flex-col gap-y-1">
                <label htmlFor="name">Name</label>
                <input
                  className="rounded border p-2 text-sm dark:bg-transparent"
                  id="name"
                  type="text"
                  placeholder="your name..."
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label htmlFor="email">E-mail</label>
                <input
                  className="rounded border p-2 text-sm dark:bg-transparent"
                  type="text"
                  placeholder="your-email@email.com"
                  id="email"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label htmlFor="msg">Message</label>
                <textarea
                  className="resize-none rounded border p-2 text-sm dark:bg-transparent"
                  placeholder="type your message..."
                  id="msg"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="w-full rounded-full bg-emerald-600 py-3 text-xs font-bold uppercase tracking-widest text-white shadow transition-colors hover:bg-emerald-700"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
