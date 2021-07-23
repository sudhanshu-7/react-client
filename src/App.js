import './App.css';
import React from 'react';
import Header from "./components/home/Header"
import Search from './components/home/Search';
import PropertyCategories from './components/home/PropertyCategories';
import Services from "./components/home/Services"
import TopOffers from "./components/home/TopOffers"
import Recent from './components/home/Recent';
import Benifits from "./components/home/Benifits"
import Citites from './components/home/Citites';
import Partners from './components/home/Partners';
import TopAgents from "./components/home/TopAgents"
import Footer from './components/home/Footer';
import Header_AU from './components/aboutUs/Header_AU';
import BodyAU from './components/aboutUs/BodyAU';
import FooterAU from './components/aboutUs/FooterAU';
import BodyCU from './components/contactUs/BodyCU';
import PropertyList from './components/propertyList/propertyList';
import SingleProperty from './components/propertyList/singleProperty';
import BodyFAQ from './components/faq/BodyFAQ';
import BodyBlog from './components/blog/BodyBlog';
import BodyTerms from './components/terms/BodyTerms';
import BodyCareer from './components/career/BodyCareer';
import BodyCareerSingle from './components/career/BodyCareerSingle';
import BodyPolicy from './components/policy/BodyPolicy';
import BodypostProperty from './components/propertyList/postProperty';
import BodyReferAndEarn from './components/referAndEarn/BodyReferAndEarn';
import BodyReview from './components/review/BodyReview';
import BodyService from './components/service/BodyService';
import SignUp from './components/home/SignUp';

function App() {
  return (
    <>
    <Header />
    <main>

    {/* <Search /> */}
    <PropertyCategories/>
    <Services />
    <TopOffers/>
    <Recent />
    <Benifits />
    <Citites />
    <Partners />
    <TopAgents />
    </main>

    <Footer/>
    <main class="page-wrapper">
    <SignUp />
    {/* <Header_AU/> */}
    {/* <BodyAU /> */}
    {/* <BodyCU /> */}
    {/* <PropertyList /> */}
    {/* <SingleProperty /> */}
    {/* <BodyFAQ /> */}
    {/* <BodyBlog /> */}
    {/* <BodyTerms/> */}
    {/* <BodyCareer /> */}
    {/* <BodyCareerSingle /> */}
    {/* <BodyPolicy /> */}
    {/* <BodypostProperty /> */}
    {/* <BodyReferAndEarn /> */}
    {/* <BodyReview /> */}
    {/* <BodyService /> */}
    </main>
    <FooterAU />
    <a class="btn-scroll-top" href="#top" data-scroll><span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i class="btn-scroll-top-icon fi-chevron-up">   </i></a>
    
    </>
  );
}

export default App;
