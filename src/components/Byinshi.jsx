import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Byinshi = () => {
    const { id } = useParams();
    const [ishuri, setIshuri] = useState([])
    const [loading, setLoading] = useState(false)
    const url = import.meta.env.MODE === "development" ? import.meta.env.VITE_BACKEND_URL : import.meta.env.VITE_PROD_BACKEND_URL

    useEffect(() => {
        setLoading(true)
        fetch(`${url}/${id}`)
            .then((response) => response.json())
            .then((data) => setIshuri(data))

        setLoading(false)
    }, [])

    let categories = ishuri && ishuri.categories && ishuri.categories.split(",")

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-2 sm:px-36 py-4 sm:py-16 text-center">
            {loading ? (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl sm:text-4xl font-bold leading-10 mt-10 text-[#F9CC0B]" style={{ textShadow: "1px 1px 2px #DF4C73" }}>
                        Loading...
                    </h1>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-5">
                    <h1 className="text-2xl sm:text-4xl font-bold leading-10 mt-10 text-[#F9CC0B]" style={{ textShadow: "1px 1px 2px #DF4C73" }}>
                        <u>Amakuru yisumbuyeho</u>
                    </h1>
                    <h1 className="text-xl sm:text-4xl font-bold leading-10 my-10" style={{ color: "#0C1D36" }}>
                        {ishuri.name}
                    </h1>

                    <p className="text-lg sm:text-2xl font-bold sm:mt-5 text-[#F9CC0B]">
                        <u className='text-[#0C1D36]'>Telefone:</u> {ishuri.phone}
                    </p>

                    <p className="text-lg sm:text-2xl font-bold sm:mt-5 text-[#F9CC0B]">
                        <u className='text-[#0C1D36]'>Imeyili:</u> {ishuri.email}
                    </p>

                    <p className="text-lg sm:text-2xl font-bold sm:mt-5 text-[#F9CC0B]">
                        <u className='text-[#0C1D36]'>Ikorera:</u> {ishuri.location}
                    </p>

                    {/* <p className="text-lg sm:text-2xl font-bold sm:mt-5 text-[#F9CC0B]">
                        {ishuri.description}
                    </p> */}

                    {/* <p className="text-lg sm:text-2xl font-bold sm:mt-5 text-[#F9CC0B]">
                        {ishuri.website}
                    </p> */}

                    <div className="flex flex-col items-center justify-center mb-8 hover:scale-125 transition duration-500 ease-in-out">
                        <h2 className="text-2xl sm:text-4xl font-bold leading-10 mt-10 text-[#0C1D36]">
                            Kategori bigisha
                        </h2>

                        <ul className="flex flex-col items-center justify-center">
                            {
                                categories && categories.map((category, index) => (
                                    <li key={index} className="text-lg sm:text-2xl font-bold sm:mt-5 text-[#DF4C73]">
                                        ✅ {category}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Byinshi
