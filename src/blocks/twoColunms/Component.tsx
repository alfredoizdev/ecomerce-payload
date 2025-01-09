const TwoColunms = () => {
  const isReverse = 'reverse'

  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Contenedor de la imagen */}
      <div
        className={`w-full md:w-1/2 ${isReverse ? 'order-last md:order-last' : 'order-first md:order-first'}`}
      >
        {/* <img
          src={image}
          alt="column content"
          className="w-full h-auto object-cover rounded-lg"
        /> */}
        my image
      </div>

      {/* Contenedor del texto */}
      <div
        className={`w-full md:w-1/2 ${isReverse ? 'order-first md:order-first' : 'order-last md:order-last'}`}
      >
        <p className="text-lg text-gray-800">my text</p>
      </div>
    </div>
  )
}

export default TwoColunms
