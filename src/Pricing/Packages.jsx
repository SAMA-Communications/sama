import React from 'react'
import Package from './Package'
function Packages() {
	return (
		<div className="flex gap-6 mt-10 pb-56">
			<Package
				title={'Free'}
				price={'0$'}
				points={[
					'All Chat & Calling Features',
					'Full API Access',
					'E2EE',
					'Community Support',
					'GPL-3.0 Code License',
				]}
			/>
			<Package
				title={'Pro'}
				price={'200$'}
				points={[
					'All Chat & Calling Features',
					'Full API Access',
					'E2EE',
					'Community Support',
					'GPL-3.0 Code License',
				]}
			/>
			<Package
				title={'Enterprise'}
				price={'Custom'}
				headers={['Everything in Free', '+']}
				points={[
					'Custom Configuration',
					'Dedicated Support',
					'Commercial Code License',
					'XMPP bridge Add-On',
				]}
			/>
		</div>
	)
}

export default Packages
