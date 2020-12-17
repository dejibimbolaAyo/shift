import React from 'react'

function Perspective({ perspective }) {
	console.log("dafs", perspective)
	return (
		<div className="relative bg-gray-50">
			<div className="container mx-auto">
				<div className="py-10">
					<div className="border rounded-md border-gray-50">
						<div className="flex justify-between">
							<div className="px-10 py-16 lg:px-16">
								<h2 className="text-xl font-semibold text-blue-900 lg:text-2xl">Your Perspective</h2>
								<p className="text-xs font-semibold leading-loose lg:text-sm">Your Perspective Type is {perspective.type}</p>
							</div>
							<div className="px-10 py-16 lg:px-20">
								<div className="flex py-2">
									<span className="w-12 mr-10 text-xs text-right text-gray-700 lg:text-sm">Extroversion(E)</span>
									<div className="flex px-4 py-1 mx-4">
										<div className={`w-12 lg:w-32 h-2 lg:h-3 rounded-l-sm ${perspective.analysis.EI.E >= perspective.analysis.EI.I ? "bg-pink-700" : "bg-gray-300"}`}></div>
										<div className={`w-12 lg:w-32 h-2 lg:h-3 rounded-r-sm ${perspective.analysis.EI.I > perspective.analysis.EI.E ? "bg-pink-700" : "bg-gray-300"}`}></div>
									</div>
									<span className="text-xs text-gray-700 lg:text-sm">Introversion(I)</span>
								</div>
								<div className="flex py-2">
									<span className="w-12 mr-10 text-xs text-right text-gray-700 lg:text-sm">Sensing(S)</span>
									<div className="flex px-4 py-1 mx-4">
										<div className={`w-12 lg:w-32 h-2 lg:h-3 rounded-l-sm ${perspective.analysis.SN.S >= perspective.analysis.SN.N ? "bg-pink-700" : "bg-gray-300"}`}></div>
										<div className={`w-12 lg:w-32 h-2 lg:h-3 rounded-r-sm ${perspective.analysis.SN.N > perspective.analysis.SN.S ? "bg-pink-700" : "bg-gray-300"}`}></div>
									</div>
									<span className="text-xs text-gray-700 lg:text-sm">Intuition(N)</span>
								</div>
								<div className="flex py-2">
									<span className="w-12 mr-10 text-xs text-right text-gray-700 lg:text-sm">Thinking(T)</span>
									<div className="flex px-4 py-1 mx-4">
										<div className={`w-12 lg:w-32 h-2 lg:h-3 rounded-l-sm ${perspective.analysis.TF.T >= perspective.analysis.TF.F ? "bg-pink-700" : "bg-gray-300"}`}></div>
										<div className={`w-12 lg:w-32 h-2 lg:h-3 rounded-r-sm ${perspective.analysis.TF.F > perspective.analysis.TF.T ? "bg-pink-700" : "bg-gray-300"}`}></div>
									</div>
									<span className="text-xs text-gray-700 lg:text-sm">Feeling(F)</span>
								</div>
								<div className="flex py-2">
									<span className="w-12 mr-10 text-xs text-right text-gray-700 lg:text-sm">Judging(J)</span>
									<div className="flex px-4 py-1 mx-4">
										<div className={`w-12 lg:w-32 h-2 lg:h-3 rounded-l-sm ${perspective.analysis.JP.J >= perspective.analysis.JP.P ? "bg-pink-700" : "bg-gray-300"}`}></div>
										<div className={`w-12 lg:w-32 h-2 lg:h-3 rounded-r-sm ${perspective.analysis.JP.P > perspective.analysis.JP.J ? "bg-pink-700" : "bg-gray-300"}`}></div>
									</div>
									<span className="text-xs text-gray-700 lg:text-sm">Perceiving(P)</span>
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
