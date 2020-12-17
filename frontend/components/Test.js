import React, { useState } from 'react';
import { useMutation } from "react-query";
import { toast } from 'react-toastify'
import Email from './Email';
import Perspective from './Perspective';
import Question from './Question';

export default function Test({ }) {
	const [answers, setAnswers] = useState({});
	const [email, setEmail] = useState('');
	const [perspective, setPerspective] = useState(false)

	const setEmailValue = (email) => setEmail(s => email)
	const setResponses = (answers) => setAnswers(s => {
		return { ...s, ...answers }
	})

	const postResponse = async () => {
		return (await fetch(`http://localhost:8090/api/v1/answers`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				answers: answers,
				email: email
			})
		}));
	}

	const mutation = useMutation(postResponse, {
		onSuccess: async (data) => {
			// Route to the perspective page
			if (data.status === 403) {
				const res = await data.json()
				toast.error(res.message, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
				})
			}
			if (data.status === 200) {
				const res = await data.json()
				setPerspective(res)
				toast.success("Response submitted", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
				})
			}
		},
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(mutation.isLoading)
		mutation.mutate();
	}

	return (
		<div>
			{perspective
				? <Perspective perspective={perspective}></Perspective>
				: <div className="relative bg-gray-50">
					<div className="container mx-auto">
						<div className="py-10">
							<h2 className="font-semibold text-blue-900 text-md">Discover Your Perspective</h2>
							<p className="text-sm text-gray-800">Complete the 7 min test and get a detailed report of your lenses on the world.
						</p>
						</div>
						<Question setResponses={setResponses} />
						<Email setEmailValue={setEmailValue} />
						<div className="flex justify-center py-24 mx-auto">
							<button className="px-4 py-2 text-white bg-blue-700 rounded-sm" type="submit" onClick={e => handleSubmit(e)}>Save {'&'} Continue</button>
						</div>
					</div>
				</div>
			}
		</div>
	)
}
