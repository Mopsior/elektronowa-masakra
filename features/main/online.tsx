export const OnlinePin = ({ status }: { status: 'loading' | 'online' | 'offline'}) => {
    return (
        <>
            <div className={`rounded-full w-3 h-3
                    ${status === 'online' ? "bg-green-500" : ''}
                    ${status === 'offline' ? "bg-red-500" : ''}
                    ${status === 'loading' ? "bg-gray-500" : ''}
                    mt-auto mb-auto mr-1`}></div>
            <div className={`rounded-full w-3 h-3
                ${status === 'online' ? "bg-green-500" : ''}
                ${status === 'offline' ? "bg-red-500" : ''}
                ${status === 'loading' ? "bg-gray-500" : ''}
                top-2 animate-ping absolute`}></div>
        </>
    )
}