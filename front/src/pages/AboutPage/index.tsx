import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [pageHtml, setPageHtml] = useState('');

  const getAboutPage = async () => {
    const response = await fetch('http://buoyant-habitat-279114.df.r.appspot.com/about');
    setPageHtml(await response.text());
  };

  useEffect(() => {
    getAboutPage();
  }, []);

  return (<div dangerouslySetInnerHTML={{ __html: pageHtml }} />);
};

export default AboutPage;
