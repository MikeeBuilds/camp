import Button from "./Button"


const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get For Free Now!</h2>
          <p className='regular-16 text-gray-10'>Available on iOS & Android</p>

          <div className="flex w-full flex-col">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetApp