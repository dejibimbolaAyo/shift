import React, { useState } from 'react'

function Email({ setEmailValue }) {

	const onEmailChange = (e) => {
		e.persist()
		setEmailValue(e.target.value)
	}


	return (
		<div className="px-10 mx-auto lg:px-40">
			<div className="h-32 border border-gray-300 rounded-sm">
				<div className="flex justify-center">
					<p className="py-5 text-sm font-semibold text-blue-900">Your Email</p>
				</div>
				<div className="flex justify-center">
					<input className="w-2/4 h-8 px-2 text-center border border-gray-500 rounded-sm" onChange={e => onEmailChange(e)} type="email" name="" id="" />
				</div>
			</div>
		</div>
	)
}

export default Email
