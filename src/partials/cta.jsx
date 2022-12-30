import { CheckIcon } from '@heroicons/react/24/outline'

export default function CTA() {
  return (
    <div className="bg-transparent" data-aos='zoom-y-out' data-aos-delay='400'>
      <div className="mx-auto max-w-4xl py-12 px-4 text-center md:py-20 sm:py-16 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
        
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to create better products?</span>
        </h2>
        <p className="text-lg leading-8 text-gray-600">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.
        </p>
        <a href="#" className="inline-flex items-center justify-center btn text-white bg-primary hover:bg-primary-dark w-full mt-3 mb-4 sm:w-auto">
          Start free trial
        </a>
        <div className="flex items-center justify-center gap-6 flex-wrap">

          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 text-green-600" aria-hidden="true" />
            <p className="text-gray-600 text-base font-medium">
              Free 14-day trial
            </p>
          </div>

          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 text-green-600" aria-hidden="true" />
            <p className="text-gray-600 text-base font-medium">
              Unlimited users
            </p>
          </div>

          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 text-green-600" aria-hidden="true" />
            <p className="text-gray-600 text-base font-medium">
              Volume discounts
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
