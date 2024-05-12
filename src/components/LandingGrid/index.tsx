import {data} from "@/components/LandingGrid/data.tsx";
import {cn} from "@/lib/utils.ts";


const LandingGrid = () => {
    const boxStyle =
        ' rounded-3xl p-12 flex flex-col h-fit md:h-full';

    return (
        <div className='flex flex-col lg:grid lg:grid-cols-4 auto-rows-[300px] gap-4 my-10'>
            {data.map((item, i) => (
                <div
                    key={i}
                    className={cn(
                        item.cName,
                        boxStyle,
                        i === 0 || i === 4 ? 'lg:col-span-2' : '',
                        i === 2 ? 'lg:row-span-2' : '')}
                >
                    {item.icon}
                    <h2 className='text-3xl mt-4'>{item.title}</h2>
                    <p className='mt-3'>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default LandingGrid