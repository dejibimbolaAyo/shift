import React from 'react'

export default function Test({ }) {
	return (
		<div className="relative bg-gray-50">
			<div className="container mx-auto">
				<div className="py-10">
					<h2 className="font-semibold text-blue-900 text-md">Discover Your Perspective</h2>
					<p className="text-sm text-gray-800">Complete the 7 min test and get a detailed report of your lenses on the world.
					</p>
				</div>
				<div className="px-10 mx-auto lg:px-40">
					<div className="h-32 border border-gray-300 rounded-sm">
						<div className="flex justify-center">
							<p className="py-5 text-sm font-semibold text-blue-900">You consider yourself more practical than creative.</p>
						</div>
						<div className="flex justify-center">
							<label htmlFor="" className="px-10 text-sm font-semibold text-red-700">Disagree</label>
							<div className="flex justify-between w-2/5 pt-1">
								<input type="radio" name="same" id="" />
								<input type="radio" name="same" id="" />
								<input type="radio" name="same" id="" />
								<input type="radio" name="same" id="" />
								<input type="radio" name="same" id="" />
								<input type="radio" name="same" id="" />
								<input type="radio" name="same" id="" />
							</div>
							<label htmlFor="" className="px-10 text-sm font-semibold text-green-800">Agree</label>
						</div>
					</div>
					<div className="h-32 border border-gray-300 rounded-sm">
						<div className="flex justify-center">
							<p className="py-5 text-sm font-semibold text-blue-900">Your Email</p>
						</div>
						<div className="flex justify-center">
							<input className="w-2/4 h-8 px-2 text-center border border-gray-500 rounded-sm" type="email" name="" id="" />
						</div>
					</div>
					<div className="flex justify-center py-24 mx-auto">
						<button className="px-4 py-2 text-white bg-blue-700 rounded-sm" type="submit">Save & Continue</button>
					</div>
				</div>
			</div>
		</div>
	)
}
