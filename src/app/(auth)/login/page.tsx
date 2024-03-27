import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: "Login",
  description: "Welcome to Our Page.",
  keywords: ['shop', 'ecommerce', 'sell']
};


const page = () => {
  return (
    <div>
      Login page
    </div>
  )
}

export default page
