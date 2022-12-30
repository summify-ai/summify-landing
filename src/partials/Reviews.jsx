const reviews = [
    {
        href: '#',
        comment:
            '— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I ve had Open PRO for about 24 hours now and I honestly don t know how I functioned without it before.',
        author: {
            name: 'Roel Aufderehar',
            category: 'UX Board',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        href: '#',
        comment:
            '— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I ve had Open PRO for about 24 hours now and I honestly don t know how I functioned without it before.',

        author: {
            name: 'Brenna Goyette',
            category: 'UX Board',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        href: '#',
        comment:
            '— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I ve had Open PRO for about 24 hours now and I honestly don t know how I functioned without it before.',
        author: {
            name: 'Daniela Metz',
            category: 'UX Board',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export default function Reviews() {
    return (
        <div className="relative bg-white px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Don't take our word for it</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                        Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {reviews.map((review) => (
                        <div key={review.title} className="flex flex-col overflow-hidden rounded">
                            <div className="flex flex-1 flex-col justify-between bg-white border border-gray-200 p-6">

                                <div className="flex items-center">
                                    <div className="flex-shrink-0 relative">
                                        <a href={review.author.href}>
                                            <span className="sr-only">{review.author.name}</span>
                                            <img className="h-14 w-14 rounded-full" src={review.author.imageUrl} alt="" />
                                        </a>
                                        <svg class="absolute top-0 -right-3 w-6 h-6 fill-current text-primary" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"></path>
                                        </svg>
                                    </div>

                                </div>
                                <div className="flex-1 mt-4">
                                    <p className="text-base text-gray-600">{review.comment}</p>
                                </div>

                                <div className="w-full border-b border-gray-200 my-5"></div>
                              
                                <div className="flex items-center gap-5">
                                    <p className="text-base font-medium text-gray-900">
                                         {review.author.name}
                                    </p>
                                    <p className="flex space-x-1 text-sm text-primary font-medium">
                                      {review.author.category}
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
