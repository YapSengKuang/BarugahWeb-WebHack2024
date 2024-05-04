import React from "react";
// Importing React from "react/jsx-runtime" for Next.js 11+
// import React from "react/jsx-runtime";

interface Lab {
  id: number;
  title: string;
  dueDate: string;
}

interface Assignment {
  id: number;
  title: string;
  dueDate: string;
}

const Page: React.FC = () => {
  // Sample data for labs and assignments
  const labs: Lab[] = [
    { id: 1, title: "Lab 1", dueDate: "2024-05-10" },
    { id: 2, title: "Lab 2", dueDate: "2024-05-15" },
    { id: 3, title: "Lab 3", dueDate: "2024-05-20" }
  ];

  const assignments: Assignment[] = [
    { id: 1, title: "Assignment 1", dueDate: "2024-05-12" },
    { id: 2, title: "Assignment 2", dueDate: "2024-05-18" },
    { id: 3, title: "Assignment 3", dueDate: "2024-05-25" }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Assessments Page</h1>

      {/* Labs */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Labs</h2>
        <ul className="list-disc pl-6">
          {labs.map((lab) => (
            <li key={lab.id}>
              {lab.title} - Due Date: {lab.dueDate}
            </li>
          ))}
        </ul>
      </div>

      {/* Assignments */}
      <div>
        <h2 className="text-xl font-bold mb-2">Assignments</h2>
        <ul className="list-disc pl-6">
          {assignments.map((assignment) => (
            <li key={assignment.id}>
              {assignment.title} - Due Date: {assignment.dueDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
