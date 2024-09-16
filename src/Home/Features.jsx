import React from 'react'
import Feature from './Feature'
function Features() {
	return (
    <div className="mt-20 z-10 relative">
      <h2 className=" font-oxanium text-4xl text-center">SAMA Features</h2>
      <div className="grid main:grid-cols-3 lg:grid-cols-2 grid-cols-1 mt-10 gap-8 justify-items-center ">
        <Feature
          svg={"/static/Homepage/Frame-132.svg"}
          title={"Messaging"}
          points={[
            "Private and group chats",
            "Typing/Sent/Read statuses",
            "File attachments",
            "Messages history API",
          ]}
          text={
            "State of the art messaging API, with rich media messages, statuses, with a way to send to a user or a group"
          }
        />
        <Feature
          svg={"/static/Homepage/Frame-132-1.svg"}
          title={"Users management"}
          points={["User authorization", "Users search", "Block list"]}
          text={
            "Powerful users management with authorization, edit profile, users search and block list supported"
          }
        />
        <Feature
          svg={"/static/Homepage/Frame-132-2.svg"}
          title={"Multi devices support"}
          text={
            "Allows users to be always connected using multiple devices and flexible Online/Offline messages delivery"
          }
          points={[
            "Multiple user devices supported",
            "Online/Offline messages delivery",
            "Deliver message to all user's devices",
          ]}
        />
        <Feature
          svg={"/static/Homepage/Frame-132-3.svg"}
          title={"Last activity"}
          text={
            "Server keeps track who is online, offline and provides a handy API to manage it in client apps"
          }
          points={[
            "Manage online, offline status",
            "Retrieve user's last activity",
            "Last activity subscription API",
          ]}
        />
        <Feature
          svg={"/static/Homepage/Frame-132-4.svg"}
          title={"Push notifications"}
          text={
            "Receive messages via Push Notifications if an app is closed or user is offline"
          }
          points={[
            "Receive messages even if offline",
            "APNS/FCM/Web push notifications supported",
          ]}
        />
        <Feature
          svg={"/static/Homepage/Frame-132-5.svg"}
          title={"Clustering"}
          text={
            "Server clustering supported out of the box to support large loads / large user base over extended period of time"
          }
          points={["Support large loads", "Support large user base"]}
        />
      </div>
    </div>
  );
}

export default Features
