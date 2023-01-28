import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head> LearnDash </Head>
      <div className='grid grid-cols-1 md:grid-cols-2 divide-x-2  h-screen'>
        <div>jhgu</div>

        <div className='grid grid-cols-1 md:grid-cols-7  divide-x-2'>
          <div className='col-span-7 md:col-span-3 h-screen'>
            <div className='grid grid-cols-1 h-full divide-y-2'>
              <div>fhuf</div>
              <div>fdjhiu</div>
            </div>
          </div>

          <div className='col-span-7 md:col-span-3 h-screen'>
            <div className='grid grid-cols-1 h-full divide-y-2'>
              <div>fhuf</div>
              <div>fdjhiu</div>
              <div>kjg</div>
            </div>
          </div>

          <div className='col-span-7 md:col-span-1'>fjih</div>
        </div>

      </div>


    </>
  )
}
