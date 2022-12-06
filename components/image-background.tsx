
const ImageBackground = () => {
  return (
    <div
      className="bg-cover bg-center"
    // Fixed the image link
      style={{
        backgroundImage: `url(./vercel.svg)`,
        height: '400px',
      }}
    >
      <h1 className="text-4xl font-bold text-white">Welcome to our site!</h1>
    </div>
  )
}

export default ImageBackground
