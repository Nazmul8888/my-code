import Lottie from "lottie-react";
import desgin from '../../Lottie/desgin.json'

const Script = () => {
    return (
        <div className="bg-[#BED754]">
            <h1 className="text-3xl font-bold  text-cyan-400  text-center py-10">Programming Language </h1>
        
             <div className=" flex justify-evenly items-center ">
            
             <div>
                <h1 className="font-bold text-3xl text-red-400 ">Lorem ipsum dolor sit amet consectetur  </h1>
                <p className=" text-lg font-semibold">
                <br /> Numquam nihil vero adipisci quos, neque repudiandae assumenda <br /> sapiente reprehenderit impedit obcaecati eos earum fugit saepe cumque iste. <br /> Est molestias nisi et ipsam eius amet nostrum nobis <br /> exercitationem facilis, voluptatem laborum neque obcaecati <br /> placeat porro explicabo voluptas eligendi mollitia dolorem. <br />Nisi, eligendi?
                </p>
          </div>
          <div>
          <Lottie animationData={desgin} className="w-[550px] h-[650px]"></Lottie>
          </div>
        </div>
        </div>
    );
};

export default Script;