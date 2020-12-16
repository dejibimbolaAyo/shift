import React from 'react'

function Perspective() {
	return (
		<div className="relative bg-gray-50">
			<div className="container mx-auto">
				<div className="py-10">
					<div className="border rounded-md border-gray-50">
						<div className="flex justify-between">
							<div className="p-16">
								<h2 className="text-2xl font-semibold text-blue-900">Your Perspective</h2>
								<p className="text-sm leading-loose font-semibold">Your Perspective Type is ENTJ</p>
							</div>
							<div className="px-20 py-16">
								<div className="flex py-2">
									<span className="text-sm text-gray-700">Extroversion(E)</span>
									<div className="flex px-4 py-1">
										<div className="w-32 h-3 bg-gray-300 rounded-l-sm"></div>
										<div className="w-32 h-3 bg-pink-700 rounded-r-sm"></div>
									</div>
									<span className="text-sm text-gray-700">Introversion(I)</span>
								</div>
								<div className="flex py-2">
									<span className="text-sm text-gray-700">Extroversion(E)</span>
									<div className="flex px-4 py-1">
										<div className="w-32 h-3 bg-gray-300 rounded-l-sm"></div>
										<div className="w-32 h-3 bg-pink-700 rounded-r-sm"></div>
									</div>
									<span className="text-sm text-gray-700">Introversion(I)</span>
								</div>
								<div className="flex py-2">
									<span className="text-sm text-gray-700">Extroversion(E)</span>
									<div className="flex px-4 py-1">
										<div className="w-32 h-3 bg-gray-300 rounded-l-sm"></div>
										<div className="w-32 h-3 bg-pink-700 rounded-r-sm"></div>
									</div>
									<span className="text-sm text-gray-700">Introversion(I)</span>
								</div>
								<div className="flex py-2">
									<span className="text-sm text-gray-700">Extroversion(E)</span>
									<div className="flex px-4 py-1">
										<div className="w-32 h-3 bg-gray-300 rounded-l-sm"></div>
										<div className="w-32 h-3 bg-pink-700 rounded-r-sm"></div>
									</div>
									<span className="text-sm text-gray-700">Introversion(I)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Perspective
