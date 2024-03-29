import AddUser from "./addUser";

const people = [
  {
    name: "ABCD Walton",
    phone: "Front-end Developer",
    email: "abcd.walton@example.com",
    totalPurchase: 3660.0,
  },
  {
    name: "EFGH Walton",
    phone: "Front-end Developer",
    email: "efgh.walton@example.com",
    totalPurchase: 300.0,
  },
  {
    name: "IJKL Walton",
    phone: "Front-end Developer",
    email: "ijkl.walton@example.com",
    totalPurchase: 1020.0,
  },
  {
    name: "MNOP Walton",
    phone: "Front-end Developer",
    email: "mnop.walton@example.com",
    totalPurchase: 113.0,
  },
  {
    name: "QRST Walton",
    phone: "Front-end Developer",
    email: "qrst.walton@example.com",
    totalPurchase: 1178.0,
  },
  {
    name: "UVWX Walton",
    phone: "Front-end Developer",
    email: "uvwx.walton@example.com",
    totalPurchase: 1234.0,
  },
  {
    name: "YZYZ Walton",
    phone: "Front-end Developer",
    email: "yzyz.walton@example.com",
    totalPurchase: 0.0,
  },
  // More people...
];

export default function User() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <AddUser />
        <div className="px-4 md:px-0  ">
          <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    phone
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    totalPurchase
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {person.name}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      {person.phone}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.totalPurchase}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a
                        href="#"
                        className="pr-2 text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Delete<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
