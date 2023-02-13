import { data } from 'autoprefixer'
import React from 'react'

const About = () => {

    const data = {
        title: "About",

    }

    return (
        <>

            <div className=' bg-transparent  '>
                <h2 className='font-bold text-5xl py-4 text-white'>{data.title}</h2>
                <p className='text-gray pb-2'>It’s hard to believe now, but back in the early to mid-2000’s when the internet was just figuring itself out and bandwidth was speeding up, there was very little interest by state massage boards in approving online CE. Raymond recalled many backs and forth debates with the state board in Texas to even listen to his proposal for online continuing education. “It can only be taught live,” they said. “Internet doesn’t count,” they said.</p>
                <p className='text-gray py-2'>Finally in the late 2000’s, as these new things called “Smartphones” were exploding in popularity, the Texas regulators could no longer ignore the outcries fro massage therapists and instructors from around the country, and online continuing education was approved.</p>
                <p className='text-gray pb-2'>Thus, LMTce was born in 2009…</p>
                <p className='text-gray '>it was an immediate success, and the rest is history.Today LMTce – a true pioneer – proudly helps industry experts from around the country deliver hundreds of thousands of hours of CE wisdom to eager students around the world, and Raymond Pierre helped blaze the trail.</p>

            </div>

        </>
    )
}

export default About