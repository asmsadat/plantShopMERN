import Banner from './Banner'
import TopSellers from './TopSellers'
import Footer from '../../components/Footer'
import Recommended from './Recommended'

function Home() {
  return (
    <>
        <Banner />
        <TopSellers />
        <Recommended />
        <Footer />
    </>
  )
}

export default Home