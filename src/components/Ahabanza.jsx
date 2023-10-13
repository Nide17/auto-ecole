const Ahabanza = () => {
    return (
        <div className={`bg-fixed bg-cover bg-center bg-no-repeat bg-[#0C1D36] h-screen w-full bg-image-ahabanza`} id="ahabanza">
            <div className="flex flex-col items-center justify-center h-full w-full px-2 sm:px-72 text-center">

                <h1 className="text-xl sm:text-6xl font-bold leading-10 sm:my-5 text-[#F9CC0B] drop-shadow-[2px 2px 2px #0C1D36] sm:border-l-8 border-[#DF4C73] rounded-lg p-4">
                    Bona amakuru yose ajyanye n'amashuri yigisha amategeko y'umuhanda no gutwara ibinyabiziga
                </h1>

                <span className="w-full sm:border-r-8 border-[#DF4C73] rounded-lg p-4 text-[#F9CC0B]">
                    <p className="text-md sm:text-3xl font-bold my-6 sm:my-10" style={{ color: "#F9CC0B", textShadow: "2px 2px 2px #0C1D36" }}>
                        Biroroshye! Byose biri hano kandi nta kiguzi usabwa
                    </p>

                    <div className="flex flex-col items-center justify-center mt-8 hover:scale-125 transition duration-500 ease-in-out">
                        <a href="/#amashuri" className="p-2 sm:p-4 mt-4 border-4 border-[#F9F9F9] sm:border-[#F9CC0B] hover:border-[#F9F9F9] rounded-full text-[#DF4C73] sm:text-[#F9F9F9] font-bold text-xl sm:text-3xl hover:border-[#0C1D36]hover:bg-[#F9F9F9] hover:text-[#DF4C73] transition duration-500 ease-in-out drop-shadow-[2px 2px 6px #F9CC0B]">
                            Kanda hano
                        </a>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Ahabanza;
