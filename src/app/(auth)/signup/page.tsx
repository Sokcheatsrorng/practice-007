import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: "Sign up",
  description: "Welcome to our Product Website. ",
  keywords: ['shop', 'ecommerce', 'sell']
};

const page = () => {
  return (
    <div>
      Sign up
    </div>
  )
}

export default page
