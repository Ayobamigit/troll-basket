import React from 'react'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Layout from '../../components/Layout/Layout'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import Search from '../../components/Search/Search'

const Home = () => {
    return (
        <Layout>
           <div className="home-header">
               <h5 className="home-heading">Trollbasket</h5>
           </div>

           <HeaderNav />
           <Search />
           <Banner />
           <Categories />
           <ProductGrid />
        </Layout>
    )
}

export default Home
