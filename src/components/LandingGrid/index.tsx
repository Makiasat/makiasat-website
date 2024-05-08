import {data} from "@/components/LandingGrid/data.tsx";
import {cn} from "@/lib/utils.ts";


const LandingGrid = () => {
    const boxStyle =
        ' rounded-3xl p-12 flex flex-col';

    return (
        <div className='grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10'>
            {data.map((item, i) => (
                <div
                    key={i}
                    className={cn(
                        item.cName,
                        boxStyle,
                        i === 0 || i === 4 ? 'md:col-span-2' : '',
                        i === 2 ? 'md:row-span-2' : '')}
                >
                    {item.icon}
                    <h2 className='text-3xl'>{item.title}</h2>
                    <p className=''>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default LandingGrid