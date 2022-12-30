import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Banner from '../partials/Banner';
<<<<<<< HEAD
import Footer from '../partials/Footer';
=======
>>>>>>> 266042d (first)

function SignUp() {
	return (
		<div className='flex flex-col min-h-screen overflow-hidden'>
			{/*  Site header */}
			<Header />

			{/*  Page content */}
			<main className='flex-grow'>
				<section className='bg-gradient-to-b from-gray-100 to-white'>
					<div className='max-w-6xl mx-auto px-4 sm:px-6'>
						<div className='pt-32 pb-12 md:pt-40 md:pb-20'>
							{/* Page header */}
							<div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
								<h1 className='h1'>
<<<<<<< HEAD
									Please click the button below to add Summify
									to your server.
=======
									Lander
>>>>>>> 266042d (first)
								</h1>
							</div>

							{/* Form */}
							<div className='max-w-sm mx-auto'>
								<div className='flex flex-wrap -mx-3 mt-6'>
									<div className='w-full px-3'>
<<<<<<< HEAD
										<a
											href='https://discord.com/api/oauth2/authorize?client_id=1049873528981295104&permissions=68608&scope=bot'
											target='_blank'
											rel='noreferrer'
										>
											<button className='btn text-white bg-indigo-600 hover:text-black w-full'>
												Add to Discord
											</button>
										</a>
=======
                                      
<a href="https://discord.com/api/oauth2/authorize?client_id=1049873528981295104&permissions=68608&scope=bot" target="_blank" rel="noreferrer">

										<button className='btn text-white bg-indigo-600 hover:text-black w-full'>
											Add to Discord
										</button>
                                        </a>

>>>>>>> 266042d (first)
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 mt-6'>
									<div className='w-full px-3'>
<<<<<<< HEAD
										<button
											disabled
											className='btn text-white bg-cyan-600 w-full'
										>
											Add to Telegram (Coming Soon)
										</button>
=======

                                        

										<button disabled className='btn text-white bg-cyan-600 w-full'>
											Add to Telegram (Coming Soon)


										</button>

                                        
>>>>>>> 266042d (first)
									</div>
								</div>
								{/* <div className='flex items-center my-6'>
									<div
										className='border-t border-gray-300 flex-grow mr-3'
										aria-hidden='true'
									></div>
								</div> */}
							</div>
						</div>
					</div>
				</section>
			</main>

			<Banner />
<<<<<<< HEAD
			<Footer />
=======
>>>>>>> 266042d (first)
		</div>
	);
}

export default SignUp;
