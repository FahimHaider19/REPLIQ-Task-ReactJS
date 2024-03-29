"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/"},
  { name: "Customer List", href: "/customer-list"},
  { name: "Product List", href: "/product-list"},
  { name: "Order List", href: "/order-list"},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="/cart" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">View Cart</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                <a href='/login' className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"> LogIn </a>              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <Navbar />
          <main className="grid place-items-center">
            <div className="max-w-7xl w-full">{children}</div>
          </main>
        </body>
      </SessionProvider>
    </html>
  );
}
