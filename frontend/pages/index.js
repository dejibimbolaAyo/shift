import React, { ReactElement } from 'react'
import Test from '../components/Test'
import Layout from '../components/Layout'

export default function IndexPage({ }) {
	return (
		<Layout title="Test">
			<Test></Test>
		</Layout>
	)
}
