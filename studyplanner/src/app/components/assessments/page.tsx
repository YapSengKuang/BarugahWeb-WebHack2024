// import React from "react";
// //import 'BarugahWeb-WebHack2024/studyplanner/src/app/index.css';
// // Importing React from "react/jsx-runtime" for Next.js 11+
// // import React from "react/jsx-runtime";

// interface Lab {
//   id: number;
//   title: string;
//   dueDate: string;
// }

// interface Assignment {
//   id: number;
//   title: string;
//   dueDate: string;
// }

// const Page: React.FC = () => {
//   // Sample data for labs and assignments
//   const labs: Lab[] = [
//     { id: 1, title: "Lab 1", dueDate: "2024-05-10" },
//     { id: 2, title: "Lab 2", dueDate: "2024-05-15" },
//     { id: 3, title: "Lab 3", dueDate: "2024-05-20" }
//   ];

//   const assignments: Assignment[] = [
//     { id: 1, title: "Assignment 1", dueDate: "2024-05-12" },
//     { id: 2, title: "Assignment 2", dueDate: "2024-05-18" },
//     { id: 3, title: "Assignment 3", dueDate: "2024-05-25" }
//   ];

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">Assessments Page</h1>

//       {/* Labs */}
//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-2">Labs</h2>
//         <ul className="list-disc pl-6">
//           {labs.map((lab) => (
//             <li key={lab.id}>
//               {lab.title} - Due Date: {lab.dueDate}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Assignments */}
//       <div>
//         <h2 className="text-xl font-bold mb-2">Assignments</h2>
//         <ul className="list-disc pl-6">
//           {assignments.map((assignment) => (
//             <li key={assignment.id}>
//               {assignment.title} - Due Date: {assignment.dueDate}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from "react"
const assessments = [
  {
    id: '1',
    name: 'Pacman solver',
    percentage: '30',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    dueDate: '24-5-2024',
    type: "Code"
  },
  {
    id: '2',
    name: 'Tech Demo',
    percentage: '50',
    imageUrl:
      'https://via.placeholder.com/256', // Placeholder image URL
    dueDate: '12-6-2024',
    type: "Presentation"
  },
  {
    id: '3',
    name: 'Final Project',
    percentage: '75',
    imageUrl:
      'https://via.placeholder.com/256', // Placeholder image URL
    dueDate: '15-7-2024',
    type: "Code"
  },
  {
    id: '4',
    name: 'Essay Assignment',
    percentage: '20',
    imageUrl:
      'https://via.placeholder.com/256', // Placeholder image URL
    dueDate: '30-6-2024',
    type: "Essay"
  }
];

const navigation = [
  { name: 'Units', href: '/components/unitManagement' },
  { name: 'Calendar', href: '/components/calendar' },
  { name: 'About', href: '/components/assessments' }

]

export default function Example() {

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
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
          </div>
          <div className="text-center">
          <ul role="list" className="divide-y divide-gray-100">
            {assessments.map((assignment) => (
              <li key={assignment.id} className="flex justify-between items-center gap-x-6 py-5">
                <div className="flex flex-col min-w-0 gap-y-1">
                  <p className="text-sm font-semibold leading-6 text-white">{assignment.name}</p>
                  <p className="text-xs leading-6 text-white">{assignment.percentage} %</p>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-white">{assignment.dueDate}</p>
                  <p className='text-xs leading-6 text-white'>{assignment.type}</p>
                </div>
              </li>
            ))}
          </ul>

            
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
/*
<ul role="list" className="divide-y divide-gray-100">
      {assessments.map((assignment) => (
        <li key={assignment.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={assignment.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-white">{assignment.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-white">{assignment.percentage} %</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-white">{assignment.dueDate}</p>
            
          </div>
        </li>
      ))}
    </ul>
*/