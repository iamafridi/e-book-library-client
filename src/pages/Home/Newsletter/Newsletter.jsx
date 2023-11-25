const Newsletter = () => {
    return (
        <div>
            <div className="h-[50vh] mb-20 bg-gray-200 text-black stroke-orange-950 shadow-black uppercase rounded-lg  " >
                <h3 className="text-3xl font-bold font-serif  text-center p-10 ">Stay With Us
                    <p className="text-black">.......</p>
                </h3>
                <p className="text-center decoration-black stroke-white">Subscribe to our newsletters now and stay up-to-date with new <br /> collections, the latest lookbooks and exclusive offers</p>

                <div className="item-center justify-center text-center mt-10 mx-auto">
                    <input type="text" placeholder="Subscribe to the newsletter" className="input input-bordered  input-primary w-full max-w-xs" />
                    <button className="btn ml-3 bg-red-300 border-none text-yellow-50 hover:text-black">Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;