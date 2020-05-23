import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [pageHtml, setPageHtml] = useState('');

  const getAboutPage = async () => {
    const response = await fetch('/about');
    setPageHtml(await response.text());
  };

  useEffect(() => {
    getAboutPage();
  }, []);

  return (<div dangerouslySetInnerHTML={{ __html: pageHtml }} />);
};

export default AboutPage;
