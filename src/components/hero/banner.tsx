'use client'

export default function Banner() {
  return (
    <div className="relative overflow-hidden pt-14 w-full">
      {/* Content container with explicit width settings */}
      <div className="mx-auto max-w-7xl px-8 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Hi!, I'm [Interactive text with write-delete effect]
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              I craft performant and visually striking web solutions that blend creativity with technical precision. Whether you're looking to establish your online presence or elevate your existing digital footprint, let's collaborate to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}