const VideoTile = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-60 px-16 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-6/12">{overview}</p>
            <div>
                <button className="p-4 px-12 border border-black bg-white font-bold text-lg text-black rounded-lg hover:opacity-80">Play</button>
                <button className="p-4 m-2 px-12 border border-black bg-gray-500 font-bold text-lg text-white rounded-lg">More Info</button>
            </div>
        </div>
    )
}

export default VideoTile;