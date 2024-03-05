export default function Tooltip(props: {text: string}) {
    return (
        <>
            <span className="ml-2 relative group">
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="w-6 h-6 cursor-pointer hover:text-blue-500"
                >
                    <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                </svg>
                <div className="absolute bg-gray-800 text-white p-2 rounded-md top-1 left-full ml-2 opacity-0 transition-opacity group-hover:opacity-100 text-center z-40">
                    {props.text}
                </div>
            </span>
        
        </>
    )
}