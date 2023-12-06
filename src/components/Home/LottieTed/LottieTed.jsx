
import Lottie from "lottie-react";
import birds from "../../Lottie/Birds.json"
import nice from '../../Lottie/nice.json'
import code from '../../Lottie/code.json'
import react from '../../Lottie/react.json'

const LottieTed = () => {
    return (
        <div className="bg-[#1AACAC]">
            <h1 className="text-3xl font-bold text-white  text-center py-10">Programming Language </h1>
        <div className=" grid grid-cols-4 gap-10">
        <div>
            <Lottie animationData={birds} className="w-[250px] h-[350px]" ></Lottie>
            <h1 className="text-3xl font-bold text-red-300 text-center">MasterMind </h1>
         </div>
         <div>
            <Lottie animationData={nice} className="w-[250px] h-[350px]" ></Lottie>
            <h1 className="text-3xl font-bold text-red-300 text-center">MasterMind </h1>
         </div>
         <div>
            <Lottie animationData={code} className="w-[250px] h-[350px]"  ></Lottie>
            <h1 className="text-3xl font-bold text-red-300 text-center">Visual Code </h1>
         </div>
         <div>
            <Lottie animationData={react} className="w-[250px] h-[350px]"></Lottie>
            <h1 className="text-3xl font-bold text-red-300 text-center">React </h1>
         </div>


         </div>
         </div>
        
        
    );
};

export default LottieTed;