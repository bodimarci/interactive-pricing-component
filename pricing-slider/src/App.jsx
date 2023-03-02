import { useState } from "react";
import bgImage from "./assets/bg-pattern.svg";
import greenCheck from "./assets/icon-check.svg";
import circles from "./assets/pattern-circles.svg";

function App() {
  const [rated, setRated] = useState(16);
  const [toggle, setToggle] = useState(false);

  const price = (amt) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amt);
  };
  return (
    <>
      <img
        src={bgImage}
        alt=''
        className='absolute -z-50 h-[50%] w-full bg-no-repeat'
      />
      <main className='mx-auto grid min-h-screen max-w-xl grid-cols-1 items-center justify-center font-Manrope '>
        <section className=''>
          {/* Text  + image*/}
          <div className='mt-10 text-center sm:mt-0'>
            <div className='flex items-center justify-center'>
              <img src={circles} alt='' className='absolute' />
            </div>
            <h1 className='text-xl font-[800] text-dark-desaturated-blue sm:text-3xl'>
              Simple, traffic-based pricing
            </h1>
            <p className='mt-2 text-sm text-grayish-blue'>
              Sign-up for our 30-day trial. <br className='sm:hidden ' /> No
              credit card required.
            </p>
          </div>
          {/* White card */}
          <div className='mt-16 mb-8 w-full px-5 sm:px-0 sm:pb-0'>
            <div className=' rounded-lg bg-white text-center drop-shadow-2xl sm:text-left'>
              {/* Information */}
              <div className='p-3 pb-0 sm:p-12 sm:pb-0'>
                <div className='grid text-grayish-blue sm:grid-cols-2'>
                  <span>
                    <p className='mt-5 text-xs tracking-widest sm:mt-2 sm:text-base'>
                      {rated * 6.25}K PAGEVIEWS
                    </p>
                  </span>
                  <span className='order-last sm:order-none'>
                    <p className='text-4xl font-[800] text-dark-desaturated-blue'>
                      {toggle ? price(rated * 0.75) : price(rated)}
                      <span className='text-base font-[600] text-grayish-blue'>
                        / month
                      </span>
                    </p>
                  </span>
                  <span className='sm:col-span-2'>
                    <div className='mt-8 mb-8 sm:mb-0'>
                      {/* Range */}
                      <input
                        value={rated}
                        min='8'
                        max='24'
                        type='range'
                        className='tw-range'
                        onChange={(e) => setRated(e.target.value)}
                      />
                    </div>
                  </span>
                </div>
                {/* Slider + toggle */}
                <div className='mx-0 mt-8 flex items-center justify-evenly text-xs text-grayish-blue sm:mx-10 sm:text-sm'>
                  <p>Monthly Billing</p>
                  {/* Toggle */}
                  <label className='relative h-6 w-12 rounded-full bg-toggle-background duration-200 hover:bg-soft-cyan'>
                    <input
                      onChange={(event) => setToggle(event.target.checked)}
                      id='check'
                      type='checkbox'
                      className='peer sr-only'
                    />
                    <span className='absolute left-1 top-[0.21rem] h-[1.1rem] w-[1.1rem] cursor-pointer rounded-full bg-white transition-all peer-checked:left-[1.625rem] peer-checked:bg-white'></span>
                  </label>
                  <p>Yearly Billing</p>
                  <div className='rounded-full bg-light-grayish-red py-0.5 px-2 text-xs text-light-red'>
                    <p className='hidden sm:block'>25% discount</p>
                    <p className='block sm:hidden'>25%</p>
                  </div>
                </div>
              </div>
              <div className='mt-10 border-b border-light-grayish-blue'></div>
              {/* List + button*/}
              <div className=' mt-8 grid grid-cols-1 p-3 pt-0 sm:grid-cols-2 sm:p-12 sm:pb-8 sm:pt-0'>
                <ul className='space-y-2 text-sm text-grayish-blue'>
                  <div className='listDiv'>
                    <img
                      src={greenCheck}
                      alt=''
                      className='my-auto mr-2 h-3 w-3'
                    />
                    <li>Unlimited websites</li>
                  </div>
                  <div className='listDiv py-2 sm:py-0'>
                    <img
                      src={greenCheck}
                      alt=''
                      className='my-auto mr-2 h-3 w-3'
                    />
                    <li>100% data ownership</li>
                  </div>
                  <div className='listDiv'>
                    <img
                      src={greenCheck}
                      alt=''
                      className='my-auto mr-2 h-3 w-3'
                    />
                    <li>Email reports</li>
                  </div>
                </ul>
                <div className='my-auto py-6 sm:ml-auto sm:py-0 sm:pt-0'>
                  <button className='rounded-full bg-dark-desaturated-blue px-10 py-3 text-sm text-pale-blue duration-200 hover:text-light-grayish-blue'>
                    Start my trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
