
import Lottie from "lottie-react";
import person from '../../Lottie/person.json'
import dived from '../../Lottie/dived.json'



const Motion = () => {

    return (
        <div className="bg-[#FF6C22]">
        <h1 className="text-4xl font-bold  text-white text-center py-10"> Module Practice Day </h1>
        <div className=" flex justify-evenly items-center ">
          <div>
            <Lottie animationData={person} className="w-[450px] h-[550px]"></Lottie>
          </div>
          <div>
                <Lottie animationData={dived} className="w-[450px] h-[550px]"></Lottie>
          </div>
        </div>
        </div>
    );
};

export default Motion;