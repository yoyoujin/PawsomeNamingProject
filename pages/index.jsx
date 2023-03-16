import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [animalInput, setAnimalInput] = useState('');
  const onSubmithandler = (e) => {
    e.preventDefault();
    setCount(count + 1);
    setAnimalInput('');
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <img src='/favicon.ico' alt='파비콘 이미지' />
        <h3>Name My Pet</h3>
        <p>You've used this app {count} times</p>
        <form onSubmit={onSubmithandler}>
          <input
            type='text'
            name='animal'
            value={animalInput}
            onChange={(e) => {
              setAnimalInput(e.target.value);
              console.log(animalInput);
            }}
            placeholder='Enter an animal'
          />
          <input type='submit' value='Generate names' />
        </form>
      </main>
    </>
  );
}
