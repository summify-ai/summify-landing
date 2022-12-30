import { BoltIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: '1. Acquisition',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        icon: GlobeAltIcon,
    },
    {
        name: '2. Activation',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        icon: ScaleIcon,
    },
    {
        name: '3. Retention',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        icon: BoltIcon,
    },
]

export default function Problems() {
    return (
        <div className="bg-white pb-12">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                        Built exclusively for you
                    </p>
                    <p className="mx-auto mt-3 max-w-3xl sm:text-xl text-base text-gray-600">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-sm px-6 lg:max-w-6xl lg:px-8 relative flex items-center flex-col">
            <div className="w-full p-1 border-b-2 border-dashed max-w-3xl mx-auto absolute top-6 lg:block hidden"></div>
                <dl className="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3 relative">
                    {features.map((feature) => (
                        <div className="flex flex-col items-center justify-center" key={feature.name}>
                            <dt className="flex flex-col items-center justify-center">
                                <div className="px-5 bg-white">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-center">
                                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                                </div>
                                </div>

                                <p className="mt-4 text-2xl font-bold leading-8 tracking-tight text-gray-900 text-center">{feature.name}</p>
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600 text-center">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
