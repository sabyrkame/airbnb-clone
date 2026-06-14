import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { TotalPrice } from './components/TotalPrice'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Categories />
      <TotalPrice />
      <Main />
      <Footer />
    </>
  )
}
