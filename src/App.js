import './App.css';
import React, { useState, useEffect } from "react";
import About from './components/about/about';
import Header from './components/header/header';
import Contact from './components/contact/contact';
import Social from './components/social/social';
import Links from './components/links/links';
import Project from './components/projects/projects';
import Certifications from './components/certifications/certifications';

function App() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3030/info");
      const info = await response.json();
      
      if(info) {
        setData(info[0]);
        setLoading(false);
      }
    } catch(error) {
      console.log("Error: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [])

  if (loading) {
    return <div>Loading Data!</div>;
  }

  return (
    <div className='main'>
      <Header name={data.name} post={data.post} mobile_link={data.mobile_link} email_link={data.email_link} whatsapp={data.whatsapp} location={data.location}/>
      <About aboutData={data.aboutinfo}/>
      <Contact mobile={data.mobile} email={data.email} address1={data.address_l1} address2={data.address_l2} address3={data.address_l3} location={data.location}/>
      <Project />
      <Certifications />
      <Social linkedin={data.linkedin} instagram={data.instagram}/>
      {/* <Links website={data.website}/> */}
    </div>
    
  );
}

export default App;
