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

import React from "react"
const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
]

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
