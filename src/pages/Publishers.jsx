import { useEffect, useState } from 'react'
import { getPublisher } from '../api/gamesApi.js';

const Publishers = () => {
    const [publisher, setPublisher] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fechePublishers = async () => {
            try {
                const res = await getPublisher()
                console.log(res)

                setPublisher(res.results)
            }catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fechePublishers()
    }, [])


    if(loading) {
        return (
            <p className='mt-20 text-white'>Loading.....</p>
        )
    }


  return (
    <div className='text-white mt-20 w-full p-5 grid lg:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1 gap-3'>
        {
            publisher.map((publish) => (
                <div className='border border-white'>
                    <h2>name: {publish.name} </h2>
                    <p>slug: {publish.slug}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Publishers
