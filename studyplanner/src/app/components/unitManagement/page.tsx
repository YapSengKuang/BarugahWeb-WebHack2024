"use client";
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface Unit {
  id: number;
  name: string;
  Semester: string;
}

const navigation = [
  { name: 'Units', href: '/components/unitManagement' },
  { name: 'Calendar', href: '/components/calendar' },
  { name: 'About', href: '/components/about' }

]

const Page: React.FC = () => {
  const [units, setUnits] = useState<Unit[]>([
    {
      id: 1,
      name: 'FIT2004 - Algorithms and data structures',
      Semester: 'Semester 1 2024'
    },
    //
  ]); 

  const addUnit = () => {
    if (units.length < 5) {
      const newUnit: Unit = {
        id: units.length + 1,
        name: `New Unit ${units.length + 1}`,
        Semester: 'Semester 1 2024'
      };
      setUnits([...units, newUnit]);
    } else {
      alert('Maximum of 5 units reached');
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/components/dashboard" className="-m-1.5 p-1.5">
              <span className="sr-only">BarugahWeb</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="text-white fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">

              <a href="/components/dashboard" className="-m-1.5 p-1.5">
                <span className="sr-only text-white">Barugah Web</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
                
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
          
        </div>

        <div className="mx-auto max-w-4xl py-2 sm:py-48 lg:py-56">
          <div className="justify-stretch">

            <div className="display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '10px', height: '100vh', width: '100vw'">
            {/* <button onClick={addUnit} className="px-2 py-1 text-sm font-bold title-font text-black-700 bg-indigo-500 rounded">
              <span className = "icon">
                <i className = 'bx bx-file-find'>Add Units</i>
              </span>
            </button> */}

            <a 
              onClick={addUnit}
              
              className=" text-white rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Units
            </a>
            </div>

            <div>
            {units.map((unit, index) => (

              
              <div className="py-8 flex flex-col md:flex-nowrap" key={unit.id}>
                <div>
                <input
                    type="text"
                    value={unit.name}
                    onChange={(e) => {
                      const newUnits = [...units];
                      newUnits[index].name = e.target.value;
                      setUnits(newUnits);
                    }}
                    className="resize font-semibold title-font text-white w-full bg-transparent border-none"
                  />
                </div>
                
                <div className = "flex justify-between flex-row ">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  
                  <span className="mt-1 text-gray-500 text-sm">{unit.Semester}</span>
                </div>
                <div className="">
                  
                  <p className="leading-relaxed"></p>
                  <a href='/components/assessments' className="text-indigo-500 inline-flex items-center mt-4">Manage Assessments
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                </div>

                
              </div>
            ))}
          </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
    )

  }

export default Page

  

// const Calendar: React.FC = () => {
//   const [units, setUnits] = useState<Unit[]>([]);

//   const addUnit = () => {
//     const newUnit: Unit = {
//       id: units.length + 1,
//       name: `Unit ${units.length + 1}`,
//       description: `Description for unit ${units.length + 1}`
//     };
//     setUnits([...units, newUnit]);
//   };

//   return (
//     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '10px', height: '100vh', width: '100vw' }}>
//       <h1>Unit Management</h1>
//       <button onClick={addUnit}>Add Unit</button>
//       {units.map(unit => (
//         <div key={unit.id} style={{ border: '1px solid black', padding: '10px', borderRadius: '5px' }}>
//           <h2>{unit.name}</h2>
//           <p>{unit.description}</p>
//         </div>
//       ))}
//       {Array(4 - units.length).fill(null).map((_, index) => (
//         <div key={`placeholder-${index}`} style={{ border: '1px solid transparent' }} />
//       ))}
//     </div>
//   );
// }
