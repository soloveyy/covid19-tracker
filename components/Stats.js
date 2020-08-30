import useStats from '../utils/useStats'

export default function Stats({url}) {
    const stats = useStats(url)
if(!stats) return <p></p>
    return (
        <div className="container">
            <div className="d-flex justify-content-around flex-container">
            <div className="card">
                <h3 className="card-title">🏥Confirmed:</h3>
                <span className="card-text">{stats.confirmed.value.toLocaleString()}</span>
            </div>
            <div className="card">
                <h3 className="card-title">⚰️Deaths:</h3>
                <span className="card-text">{stats.deaths.value.toLocaleString()}</span>
            </div>
            <div className="card">
                <h3 className="card-title">👌Recovered:</h3>
                <span className="card-text">{stats.recovered.value.toLocaleString()}</span>
            </div>
            </div>
        </div>  
    )

}