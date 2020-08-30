import Stats from '../components/Stats'
import Countries from '../components/CountrySelector'


export default function Index() {
    return <div className="container">
        <h1 className="title">COVID 19 TRACKER</h1>
        <div className="covid-card">
        <Stats url="https://covid19.mathdro.id/api"></Stats>
        <Countries/>
        </div>
    </div>
}