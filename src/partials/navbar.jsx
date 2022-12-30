
import { Fragment } from 'react'
import React, { useState, useEffect } from "react";
import { Popover, Transition } from '@headlessui/react'
import { Link } from "react-router-dom"
import Logo from '../images/logo.png';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    return (
        <div className="">
            <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && "bg-white backdrop-blur-sm shadow-lg"
                }`}>
                <Popover className="relative">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                        <div className="flex justify-start lg:w-0 md:flex-1">
                            <Link to="/" className="flex items-center gap-1 focus:outline-none" aria-label="">
                                <img
                                    className="h-12 md:h-14 w-auto"
                                    src={Logo}
                                    alt=""
                                />
                                <span className="font-extrabold tracking-wide text-gray-900 text-3xl">Lander</span>
                            </Link>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                            <Link to="/pricing" className="text-lg font-medium text-gray-900 hover:text-primary transition-colors ease-in-out duration-150">
                                About
                            </Link>
                            <Link to="/pricing" className="text-lg font-medium text-gray-900 hover:text-primary transition-colors ease-in-out duration-150 ">
                                Pricing
                            </Link>
                        </Popover.Group>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">

                            <Link
                                to="/signup"
                                className="btn-sm ml-8 sm:px-5 px-4 text-gray-100 bg-primary hover:bg-primary-dark shrink-0"
                            >
                                <span>Sign Up</span>
                                <svg
                                    className="w-3 h-3 fill-current text-gray-100 flex-shrink-0 ml-2 -mr-1"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                        fillRule="nonzero"
                                    />
                                </svg>
                            </Link >
                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
                        >
                            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-5 pt-5 pb-6">
                                    <div className="flex items-center justify-between">
                                        <Link to="/" className="flex items-center gap-1 focus:outline-none" aria-label="">
                                            <img
                                                className="h-12 md:h-14"
                                                src={Logo}
                                                alt=""
                                            />
                                            <span className="font-extrabold tracking-wide text-gray-900 text-3xl">Lander</span>
                                        </Link>
                                        <div className="-mr-2">
                                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid grid-cols-1 gap-7">


                                            <Link to="/pricing" className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50" >
                                                <div className="ml-4 text-base font-medium text-gray-900">Pricing</div>
                                            </Link>
                                            <Link to="/pricing" className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50" >
                                                <div className="ml-4 text-base font-medium text-gray-900">About</div>
                                            </Link>
                                            <Link to="/pricing" className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50" >
                                                <div className="ml-4 text-base font-medium text-gray-900">Contact</div>
                                            </Link>

                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5">
                                    <Link
                                        to="/signup"
                                        className="btn-sm sm:px-5 px-4 text-gray-100 bg-primary hover:bg-primary-dark shrink-0 w-full"
                                    >
                                        <span>Sign Up</span>
                                        <svg
                                            className="w-3 h-3 fill-current text-gray-100 flex-shrink-0 ml-2 -mr-1"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                                fillRule="nonzero"
                                            />
                                        </svg>
                                    </Link >
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>




        </div>
    )
}
