import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import placeholderImage from '../assets/autoecole.jpg'

const Amashuri = () => {

  const backend = import.meta.env.MODE === "development" ? import.meta.env.VITE_BACKEND_URL : import.meta.env.VITE_PROD_BACKEND_URL

  const [amashuri, setAmashuri] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(backend)
      .then((response) => response.json())
      .then((data) => setAmashuri(data))

    setLoading(false)
  }, [])

  console.log(amashuri)

  return (
    !loading ? (
      <div className="flex flex-wrap items-center justify-around min-h-screen w-full px-2 sm:px-36 py-4 sm:py-16 text-center" id="amashuri">

        {amashuri && amashuri.length > 0 ?

          amashuri.map((ishuri) => (
            <div key={ishuri.id} className="flex flex-col items-center justify-center my-4 sm:my-12 mx-1 p-6 sm:p-8 hover:scale-105 transition duration-500 ease-in-out bg-[#0C1D36] rounded-lg w-full sm:w-1/4">
              <div className="flex flex-col items-center justify-center">
                <img src={placeholderImage} alt={ishuri.name} className="rounded-lg h-48 sm:h-64" />

                <h1 className="text-md sm:text-xl font-bold leading-10 mt-10" style={{ color: "#F9CC0B", textShadow: "1px 1px 2px #DF4C73" }}>
                  {ishuri.name}
                </h1>

                <p className="text-lg sm:text-2xl font-bold sm:mt-5" style={{ color: "#F9CC0B", textShadow: "1px 1px 2px #DF4C73" }}>
                  {ishuri.phone}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center mb-8 hover:scale-125 transition duration-500 ease-in-out">
                <Link to={`/ishuri/${ishuri.id}`} className="p-2 sm:p-4 mt-4 border-4 border-[#F9CC0B] hover:border-[#F9F9F9] rounded-full text-[#F9F9F9] font-bold text-md sm:text-2xl hover:border-[#0C1D36]hover:bg-[#F9F9F9] hover:text-[#DF4C73] transition duration-500 ease-in-out">
                  Reba byinshi
                </Link>
              </div>

            </div>
          )) : (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl sm:text-4xl font-bold leading-10 mt-10 text-[#F9CC0B]" style={{ textShadow: "1px 1px 2px #DF4C73" }}>
                Nta shuri ryashoboye kuboneka
              </h1>
            </div>
          )}
      </div>
    ) : (
      <div className="flex flex-wrap items-center justify-around min-h-screen w-full px-2 sm:px-36 py-4 sm:py-16 text-center" id="amashuri">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-4xl font-bold leading-10 mt-10 text-[#F9CC0B]" style={{ textShadow: "1px 1px 2px #DF4C73" }}>
            Loading...
          </h1>
        </div>
      </div>
    )
  )
}

export default Amashuri