import React, { useState } from 'react'
import { useQuery } from "react-query";
import { Radio, RadioGroup } from "react-radio-group";
function Question({ setResponses }) {
	const [answers, setAnswers] = useState({});

	const fetchQuestions = async () => {
		return (await fetch(`http://localhost:8090/api/v1/questions`)).json();
	}

	const handleRadioChange = (questionId, choice) => {
		setAnswers(s => {
			s[`${questionId}`] = choice
			return s
		});

		const resp = {
			[`${questionId}`]: choice
		}
		setResponses(resp);
	}

	const responseRange = 7;

	const RadioButton = ({ questionId }) => {
		const radioButtons = []
		for (let i = 1; i <= responseRange; i++) {
			radioButtons.push(
				<Radio key={i} value={i} name={questionId} />
			)
		}

		return radioButtons
	}

	const { data, isLoading, error } = useQuery('fetchQuestions', fetchQuestions)

	return (
		<div>
			{isLoading
				? <div className="px-10 mx-auto">
					<p className="text-center">Loading questions...</p>
				</div>
				: <div className="px-10 mx-auto lg:px-40">
					{data ? data.map((question, index) =>
						<div key={index}>
							<div className="h-32 border border-gray-300 rounded-sm">
								<div className="flex justify-center">
									<p className="py-5 text-sm font-semibold text-center text-blue-900">{question.question}</p>
								</div>
								<div className="flex justify-center w-full px-10 lg:px-32">
									<label htmlFor="" className="px-10 text-sm font-semibold text-red-700">Disagree</label>
									<RadioGroup name={`question_${question.id}`} selectedValue={answers[index]} onChange={(choice) => handleRadioChange(index, choice)} className="flex justify-between w-full pt-1">
										<RadioButton questionId={`question_${question.id}`} />
									</RadioGroup>
									<label htmlFor="" className="px-10 text-sm font-semibold text-green-800">Agree</label>
								</div>
							</div>
						</div>
					) : <p>{data.message}</p>}
				</div>
			}
		</div>
	)
}

export default Question
