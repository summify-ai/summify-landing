import React from "react";
import { CheckIcon } from '@heroicons/react/20/solid'
import Footer from "../partials/Footer";
import CTA from "../partials/cta";
import FAQ from "../partials/FAQ";
import Reviews from "../partials/Reviews";
import Navbar from "../partials/navbar";

const tiers = [

    {
        name: 'Essential',
        href: '#',
        priceMonthly: 49,
        description: 'Better insights for growing businesses that want more customers.',
        featureTitle: 'Features include:',
        includedFeatures: [
            '50 Placeholder text commonly',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
        ],
    },
    {
        name: 'Premium',
        href: '#',
        priceMonthly: 79,
        description: 'Better insights for growing businesses that want more customers.',
        featureTitle: 'All features of Essential plus:',
        includedFeatures: [
            '100 placeholder text commonly',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Placeholder text commonly used',
        ],
    },
    {
        name: 'Advanced',
        href: '#',
        priceMonthly: 129,
        description: 'Better insights for growing businesses that want more customers.',
        featureTitle: 'All features of Essential plus:',
        includedFeatures: [
            '200 placeholder text commonly',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Voluptate velit esse cillum',
            'Placeholder text commonly used',
        ],
    },
]

export default function Pricing() {
    return (
        <>
            <Navbar />
            <div className="bg-white">
                <div className="mx-auto max-w-6xl xl:pt-40 lg:pt-36 sm:pt-32 pt-24 px-4 sm:px-6 lg:px-8">
                    <div className="sm:align-center sm:flex sm:flex-col">
                        <h1 className="sm:text-5xl text-4xl font-bold tracking-tight text-gray-900 sm:text-center leading-snug" data-aos='zoom-y-in'
                            data-aos-delay='150'>Simple, transparent pricing</h1>
                        <p className="mt-4 text-xl text-gray-600 sm:text-center" data-aos='zoom-y-out'
                            data-aos-delay='300'>
                            Get the Open PRO plan that fits your needs at a special introductory price.
                        </p>
                        <div className="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-12">
                            <div className="flex items-center gap-4">
                                <span class=" text-gray-600 font-medium">Billed Monthly</span>
                                <label class="inline-flex relative items-center cursor-pointer">

                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-[26px] after:transition-all peer-checked:bg-primary"></div>

                                </label>
                                <span class=" text-gray-600 font-medium">Billed Annually</span>
                            </div>
                        </div>
                    </div>
                    <div data-aos='zoom-y-out' data-aos-delay='500' className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl max-w-sm mx-auto xl:mx-0 xl:max-w-none lg:grid-cols-3">
                        {tiers.map((tier) => (
                            <div key={tier.name} className="rounded border border-gray-200 shadow-sm h-full bg-white ">
                                <div className="px-6 pt-6 pb-8 flex h-full flex-col justify-between">
                                    <div className="divide-y divide-gray-200">
                                        <div className="pb-4">
                                            <h2 className="text-2xl font-bold leading-6 text-primary">{tier.name}</h2>
                                            <p className="my-2">
                                                <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.priceMonthly}</span>{' '}
                                                <span className="text-base font-medium text-gray-500">/mo</span>
                                            </p>
                                            <p className="text-gray-600">{tier.description}</p>
                                        </div>
                                        <div className="pt-4">
                                            <h3 className="text-base font-medium text-gray-900">{tier.featureTitle}:</h3>
                                            <ul role="list" className="mt-6 space-y-4">
                                                {tier.includedFeatures.map((feature) => (
                                                    <li key={feature} className="flex space-x-3">
                                                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                                                        <span className="text-sm text-gray-500">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="border border-gray-300 p-2 rounded mt-8 ">
                                        <a href={tier.href} className="block w-full rounded border border-gray-100 bg-primary py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors ease-in-out duration-150">
                                            Start free trial
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-b border-gray-200 lg:py-4 py-6 lg:mt-7 mt-9 flex lg:flex-row flex-col gap-4 items-center justify-between">
                        <p className="text-lg font-semibold text-gray-800">
                            Expecting more than 1000 Active End Users?
                        </p>

                        <a href="#" className="inline-flex items-center justify-center btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto">
                            Contact Us
                        </a>
                    </div>
                    <FAQ />

                    <div className="w-full border-b border-gray-200"></div>
                    <Reviews/>

                    <div className="w-full border-b border-gray-200"></div>
                </div>
            </div>
            <CTA />
            <Footer />
        </>
    )
}
