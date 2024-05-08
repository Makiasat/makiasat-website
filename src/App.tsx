import Spline from '@splinetool/react-spline';
import LandingGrid from "@/components/LandingGrid";

function App() {

    return (
        <div className="flex flex-col w-full h-screen items-center justify-center">
            <div className="h-screen w-full mt-20 min-h-screen">
                <Spline scene="https://prod.spline.design/GACurbBteJIGUyBX/scene.splinecode"/>
            </div>
            <div className="w-full">
                <div className="bg-zinc-900 rounded-t-3xl p-10 flex flex-col items-center justify-center">
                    <div className='max-w-7xl mx-auto mt-10 mb-10'>
                        <LandingGrid/>
                    </div>
                </div>
                <div className="bg-white rounded-t-3xl p-10 flex flex-col items-center justify-center" >

                </div>
            </div>
        </div>
    )
}

export default App
