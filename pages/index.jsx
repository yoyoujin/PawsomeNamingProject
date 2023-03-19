import Head from 'next/head';
import { useState } from 'react';
import styles from './index.module.css';

export default function Home() {
  const [animalInput, setAnimalInput] = useState('');
  const [result, setResult] = useState();

  const onSubmithandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      console.log(data);
      setResult(data.result);
      setAnimalInput('');
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <img src='/favicon.ico' className={styles.icon} alt='파비콘 이미지' />
        <h3>Name My Pet</h3>
        <form onSubmit={onSubmithandler}>
          <input
            type='text'
            name='animal'
            value={animalInput}
            onChange={(e) => {
              setAnimalInput(e.target.value);
            }}
            placeholder='Enter an animal'
          />
          <input type='submit' value='Generate names' />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </>
  );
}
