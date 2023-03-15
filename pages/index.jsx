import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <img src='/favicon.ico' alt='파비콘 이미지' />
        <h3>Name My Pet</h3>
        <form>
          <input type='text' name='animal' placeholder='Enter an animal' />
          <input type='submit' />
        </form>
      </main>
    </>
  );
}
