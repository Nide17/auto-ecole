const Tuvugishe = () => {
    return (
        <div className={`bg-fixed bg-cover bg-center bg-no-repeat bg-[#0C1D36] h-screen w-full py-8 sm:py-4`} id="tuvugishe">

            <div className="flex flex-col h-full w-full text-center sm:px-16">
                <div className="flex flex-col sm:flex-row justify-around sm:justify-between items-center w-full h-full sm:p-2 my-4">

                    <div className="flex flex-col justify-center items-center sm:w-1/2 p-4 backdrop-contrast-50 bg-[#F9F9F9] border rounded-lg border-[#F9F9F9] mx-4 sm:mx-20 sm:h-2/3 hover:scale-110 transition duration-500 ease-in-out">
                        <p className="text-lg sm:text-5xl text-[#0C1D36] leading-0 my-12 sm:px-12" style={{ textShadow: "2px 2px 2px #0C1D36" }}>
                            Waba ufite ikibazo, icyifuzo, igitekerezo cyangwa inyunganizi? Tuvugishe tugufashe!
                        </p>

                        <p className="text-sm sm:text-2xl text-[#0C1D36] mb-2 leading-0">
                            Ibitekerezo byawe ni iby'agaciro kuri twe. Twandikire! 👉
                        </p>
                    </div>

                    <div
                        className="flex flex-col justify-center items-center backdrop-contrast-50 bg-[#F9F9F9] border rounded-lg border-[#F9F9F9] sm:mx-20 sm:h-2/3 w-11/12 sm:w-1/2 p-4 hover:scale-110 transition duration-500 ease-in-out">
                        <form className="flex flex-col justify-center items-center w-full">
                            <input type="text"
                                placeholder="Izina" className="w-5/6 sm:w-3/4 h-10 px-2 py-1 text-[#0C1D36] rounded-lg border-2 border-[#0C1D36] bg-[#F9CC0B] hover:bg-[#F9F9F9] my-2" />
                            <input type="text"
                                placeholder="Imeyili" className="w-5/6 sm:w-3/4 h-10 px-2 py-1 text-[#0C1D36] rounded-lg border-2 border-[#0C1D36] bg-[#F9CC0B] hover:bg-[#F9F9F9] my-2" />
                            <textarea
                                placeholder="Ikibazo, igitekerezo, inyunganizi, ..."
                                className="w-5/6 sm:w-3/4 h-32 px-2 py-1 text-[#0C1D36] rounded-lg border-2 border-[#0C1D36] bg-[#F9CC0B] hover:bg-[#F9F9F9] my-2" />
                            <button type="submit"
                                className="w-5/6 sm:w-3/4 h-10 rounded-lg border-2 border-[#F9F9F9] hover:border-[#0C1D36] my-2 bg-[#0C1D36] hover:bg-[#F9F9F9] text-[#F9F9F9] hover:text-[#DF4C73] hover:scale-90 transition duration-500 ease-in-out">
                                Ohereza
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tuvugishe;