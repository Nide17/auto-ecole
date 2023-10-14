import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Byinshi = () => {
    const { id } = useParams();
    const [ishuri, setIshuri] = useState([])
    const [loading, setLoading] = useState()
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
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-2 sm:p-36 pt-36 sm:pt-36">
            {loading ? (
                <div className="flex flex-col items-center justify-center w-11/12 sm:w-10/12">
                    <h1 className="text-2xl 2xl:text-4xl font-bold leading-10 mt-10 text-[#F9CC0B]" style={{ textShadow: "1px 1px 2px #DF4C73" }}>
                        Biri gukorwa ...
                    </h1>
                </div>
            ) : (
                    <div className="flex flex-col justify-center py-4 px-12 sm:px-16 mb-4 2xl:my-8 border-4 rounded-lg border-[#F9CC0B] bg-[#0C1D36] hover:scale-105 transition duration-500 ease-in-out" id="ishuri" style={{ boxShadow: "1px 1px 2px #DF4C73" }}>

                    <h1 className="text-xl 2xl:text-4xl font-bold leading-10 text-[#F9CC0B]" style={{ textShadow: "1px 1px 2px #DF4C73" }}>
                        <u>Amakuru yisumbuyeho</u>
                    </h1>

                    <h1 className="text-xl 2xl:text-4xl font-bold leading-10 my-2" style={{ color: "#0C1D36" }}>
                        {ishuri.name}
                    </h1>

                    <table className="table-auto">
                        <tbody>
                            <tr className="text-lg 2xl:text-2xl font-bold 2xl:mt-5 text-[#F9CC0B]">
                                <td>
                                    <u className='text-[#F9F9F9]'>Telefone</u>
                                </td>
                                <td>&nbsp;{ishuri.phone}</td>
                            </tr>
                            <tr className="text-lg 2xl:text-2xl font-bold 2xl:mt-5 text-[#F9CC0B]">
                                <td><u className='text-[#F9F9F9]'>Imeyili</u></td>
                                <td>&nbsp;{ishuri.email}</td>
                            </tr>
                            <tr className="text-lg 2xl:text-2xl font-bold 2xl:mt-5 text-[#F9CC0B]">
                                <td><u className='text-[#F9F9F9]'>Ikorera</u></td>
                                <td>&nbsp;{ishuri.location}</td>
                            </tr>
                        </tbody>
                    </table>


                    {/* <p className="text-lg 2xl:text-2xl font-bold 2xl:mt-5 text-[#F9CC0B]">
                        {ishuri.description}
                    </p> */}

                    {/* <p className="text-lg 2xl:text-2xl font-bold 2xl:mt-5 text-[#F9CC0B]">
                        {ishuri.website}
                    </p> */}

                    <div className="flex flex-col justify-center mb-8 hover:scale-125 transition duration-500 ease-in-out">
                        <h2 className="text-xl 2xl:text-4xl font-bold leading-10 my-8 text-[#F9F9F9]">
                            Kategori bahugurira
                        </h2>

                        <ul className="flex flex-col justify-center">
                            {
                                categories && categories.map((category, index) => (
                                    <li key={index} className="text-lg 2xl:text-2xl font-bold text-[#DF4C73]">
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