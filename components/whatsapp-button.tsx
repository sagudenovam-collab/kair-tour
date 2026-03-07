"use client"

import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href="https://wa.me/77077579993"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M16.003 2.667A13.26 13.26 0 002.72 15.944a13.18 13.18 0 001.807 6.663L2.667 29.333l6.95-1.822A13.27 13.27 0 0016.003 29.3 13.27 13.27 0 0029.333 16.03 13.27 13.27 0 0016.003 2.667zm0 24.266a10.87 10.87 0 01-5.548-1.52l-.398-.236-4.12 1.08 1.1-4.016-.26-.413a10.83 10.83 0 01-1.66-5.787A10.9 10.9 0 0016.003 5.05 10.9 10.9 0 0126.95 16.003a10.91 10.91 0 01-10.947 10.93zm5.997-8.19c-.33-.165-1.95-.962-2.252-1.072-.302-.11-.522-.165-.742.165s-.852 1.072-1.044 1.292-.385.248-.714.083c-.33-.165-1.392-.513-2.652-1.635-.98-.873-1.642-1.951-1.834-2.281-.193-.33-.02-.508.145-.672.148-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.742-1.789-1.017-2.449-.268-.643-.54-.556-.742-.566l-.633-.01a1.213 1.213 0 00-.88.413c-.302.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.553 5.64 4.983.788.34 1.403.543 1.882.695.791.251 1.511.216 2.08.131.635-.095 1.95-.797 2.225-1.567.275-.77.275-1.43.193-1.567-.083-.138-.302-.22-.633-.385z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" />
    </a>
  )
}
