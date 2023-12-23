export default function Card({ ideas }) {
    const formattedDate = (dateString) => {
        const dateParts = dateString.split(' ')[0].split('-');
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2];

        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        const formattedMonth = months[parseInt(month, 10) - 1];

        return `${day} ${formattedMonth} ${year}`;
    };

    return (
        <>
            {ideas?.data?.map((idea) => (
                <div
                    key={idea.id}
                    className="border w-60 rounded-md overflow-hidden shadow relative group"
                >
                    <div className="bg-primary text-white absolute transition-all duration-300 flex flex-col items-center mx-auto justify-center w-full h-full z-10 opacity-0 group-hover:opacity-100 bg-opacity-80 cursor-pointer" >
                        <p className='font-bold text-8xl'>&gt;</p>
                        <p>READ MORE</p>
                    </div>
                    <img src={idea.medium_image[0]?.url} alt="Image" className='w-full h-40 object-cover' />
                    <p className="px-2 pt-1 text-gray-400 font-semibold">{formattedDate(idea.published_at)}</p>
                    <p className="line-clamp-3 text-ellipsis px-2 pb-2 font-bold">{idea.title}</p>
                </div>
            ))}
        </>
    )
}
