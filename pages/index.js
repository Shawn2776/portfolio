export default function Home() {
  return (
    <>
      <div className="min-h-full flex flex-col justify-center mt-[20%] ml-40">
        <p className="text-8xl">
          SHAWN
          <br />
          HARRINGTON
        </p>
        <p className="text-5xl">FULL-STACK SOFTWARE ENGINEER</p>
        <div className="flex mt-5 text-2xl">
          <div>
            <button className="border bg-black text-white p-2 rounded hover:bg-white hover:text-black hover:border pl-5 pr-5">
              ABOUT ME
            </button>
          </div>
          <div className="ml-10">
            <button className="border bg-black text-white p-2 rounded hover:bg-white hover:text-black hover:border pl-5 pr-5">
              HIRE ME
            </button>
          </div>
        </div>
      </div>
      <section>
        <div className="w-full bg-blue-700 text-white mt-20 pt-20 pb-20">
          <p className="text-3xl ml-40">
            I am an <strong>enthusiastic developer</strong> with a strong
            addiction
            <br /> for discovering <strong>new coding perspectives.</strong>
          </p>
        </div>
      </section>
      <section className="ml-40 mt-40 text-3xl mb-40 mr-40 pt-40 pb-40">
        <p className="mb-5">
          <strong>ABOUT ME</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. <br />
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </section>
      <section className=" bg-black text-white text-3xl w-full">
        <div className="ml-40 pt-40">
          <p className="mb-5">
            <strong>CONTACT</strong>
          </p>
          <div className="flex justify-between mr-40">
            <p>
              Interested in working together?
              <br />
              Let's connect via email or LinkedIn.
            </p>
            <p>email / linked in icons</p>
          </div>
          <div className="flex mt-10 pb-40 ">
            <div className="flex flex-col w-[30%] justify-between">
              <input
                className="mb-3 h-12"
                type="text"
                placeholder=" Name"
              ></input>
              <input
                className="mb-3 h-12"
                type="text"
                placeholder=" Email"
              ></input>
              <input
                className="h-12"
                type="text"
                placeholder=" Subject"
              ></input>
            </div>
            <div className="ml-10 w-[50%] ">
              <textarea
                placeholder="Message"
                type="text-area"
                rows="5"
                cols="60"
              />
            </div>
          </div>
          <button>SEND</button>
        </div>
      </section>
    </>
  );
}
