import { useState, useEffect } from "react"

export default function useStats(url) {
    const [stats, setStats] = useState()

    useEffect(() => {
        console.log('Mounting or updating');
        async function fetchData() {
            console.log('fatching data');
            const data = await fetch(url).then(res => res.json()
            ).catch(err => {
                setError(err)
            })
            setStats(data)
        }
        fetchData()
    }, [url])
    return stats
}