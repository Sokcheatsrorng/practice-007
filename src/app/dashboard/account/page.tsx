import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: "Account",
  description: "Welcome to Account Page.",
  keywords: ['register', 'login', 'signup']
};


const page = () => {
  return (
    <div>
      This is account page
    </div>
  )
}

export default page
