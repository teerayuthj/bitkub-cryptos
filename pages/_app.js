import "../styles/globals.css"
import { useEffect } from "react"
import "tailwindcss/tailwind.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function() {
        navigator.serviceWorker.register("/sw.js").then(
          function(registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            )
          },
          function(err) {
            console.log("Service Worker registration failed: ", err)
          }
        )
      })
    }
  }, [])

  return (
    <>
      <title>Bitcoin</title>
      <link rel="icon" href="/icons/btc.png" />
      <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between my-4">
          <div className="pl-4 md:pl-0">
            <img src="/icons/btc.png" className="max-w-md mx-auto h-9" />
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer className="flex items-center justify-center w-full h-20 relative bottom-0 top-auto  border-t mt-10 hover:text-red-500">
        <a
          className="flex items-center justify-center"
          href="https://github.com/bitkub/bitkub-official-api-docs/blob/master/restful-api.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          API by {"Bitkub"}
        </a>
      </footer>
    </>
  )
}

export default MyApp
