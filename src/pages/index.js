'use client';

import Head from 'next/head';
import {useState} from 'react';

import styles from '@/styles/Home.module.css';

export default function Home() {
  const [url, setUrl] = useState('');
  const [websiteWidth, setWebsiteWidth] = useState('1440px');
  const [mobileWidth, setMobileWidth] = useState('425px');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Dev Preview</title>
        <meta
          name='description'
          content='Preview URL in Scaled Desktop, Tablet, and Mobile Views'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.previewContainer}>
        <div className={styles.url}>
          <h1>Preview URL in Scaled Desktop, Tablet, and Mobile Views (F11)</h1>
          <input
            type='text'
            placeholder='Enter URL (e.g., http://localhost:3000)'
            value={url}
            onChange={handleInputChange}
          />
          <div className={styles.widhtNavigation}>
            <p onClick={() => setUrl('http://localhost:3000')}>http://localhost:3000</p>
          </div>
          <div className={styles.widhtNavigation}>
            Website:
            <p onClick={() => setWebsiteWidth('1024px')}>1024px</p>
            <p onClick={() => setWebsiteWidth('1440px')}>1440px</p>
          </div>
          {/* <div className={styles.widhtNavigation}>
            Tablet:
            <p onClick={() => setMobileWidth('320px')}>320px</p>
            <p onClick={() => setMobileWidth('375px')}>375px</p>
            <p onClick={() => setMobileWidth('425px')}>425px</p>
          </div> */}
          <div className={styles.widhtNavigation}>
            Mobile:
            <p onClick={() => setMobileWidth('320px')}>320px</p>
            <p onClick={() => setMobileWidth('375px')}>375px</p>
            <p onClick={() => setMobileWidth('425px')}>425px</p>
          </div>
        </div>

        {/* Desktop Preview */}
        <div className={`${styles.desktop}`}>
          <iframe style={{width: websiteWidth}} src={url} title='Desktop Preview'></iframe>
        </div>

        {/* Tablet Preview */}
        <div className={`${styles.tablet}`}>
          <iframe
            // className={styles.tablet}
            src={url}
            title='Tablet Preview'></iframe>
        </div>

        {/* Mobile Preview */}
        <div className={`${styles.mobile}`}>
          <iframe style={{width: mobileWidth}} src={url} title='Mobile Preview'></iframe>
        </div>
      </main>
    </>
  );
}
