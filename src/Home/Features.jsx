import React from 'react'
import Feature from './Feature'
function Features() {
	return (
		<div className="mt-20 z-10 relative">
			<h1 className=" font-oxanium text-4xl text-center">SAMA Features</h1>
			<div className="grid grid-cols-3 mt-10 gap-8">
				<Feature
					svg={'/static/Homepage/Frame-132.svg'}
					title={'Messaging'}
					points={[
						'Private and group chats',
						'Typing/Sent/Read statuses',
						'File attachments',
						'Messages history API',
					]}
					text={
						'State of the art messaging API, with rich media messages, statuses, with a way to send to a user, a group of users'
					}
				/>
				<Feature
					svg={'/static/Homepage/Frame-132-1.svg'}
					title={'Users management'}
					points={['User authorization', 'Users search', 'Block list']}
					text={
						'Powerful users management with authorization, edit profile, users search and block list supported'
					}
				/>
				<Feature
					svg={'/static/Homepage/Frame-132-2.svg'}
					title={'Multi devices support'}
					text={
						'Server allows for people to be always connected using multiple devices and flexible Online/Offline messages delivery'
					}
					points={[
						'Multiple user devices supported',
						'Online/Offline messages delivery',
						"Deliver message to all user's devices",
					]}
				/>
				<Feature
					svg={'/static/Homepage/Frame-132-3.svg'}
					title={'Last activity'}
					text={
						'Server keeps track who is online, offline and provides a handy API to manage it in client apps'
					}
					points={[
						'Manage online, offline status',
						"Retrieve user's last activity",
						'Last activity subscription API',
					]}
				/>
				<Feature
					svg={'/static/Homepage/Frame-132-4.svg'}
					title={'Push notifications'}
					text={
						'Receive messages even if offline via alternative message delivery methods - Push Notifications'
					}
					points={[
						'Receive messages even if offline',
						'APNS/FCM/Web push notifications supported',
					]}
				/>
				<Feature
					svg={'/static/Homepage/Frame-132-5.svg'}
					title={'Clustering'}
					text={
						'Server clustering supported out of the box to support large loads / large user base over extended period of time'
					}
					points={['Support large loads', 'Support large user base']}
				/>
			</div>
		</div>
	)
}

export default Features
