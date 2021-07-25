import { useState } from 'react';
import Layout from '../components/Layout';
import { decToRadix } from '../libs/radix';

const useRadix = () => {
  const [dec, setDec] = useState(0);
  const [base, setBase] = useState(0);
  const [result, setResult] = useState('');
  return { dec, setDec, base, setBase, result, setResult };
};

const IndexPage = () => {
  const { dec, setDec, base, setBase, result, setResult } = useRadix();
  const onDecChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const evDec = Number(ev.target.value);
    setDec(evDec);
    if (evDec > 0 && base > 0) {
      setResult(decToRadix(evDec, base));
    }
  };
  const onBaseChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const evBase = Number(ev.target.value);
    setBase(evBase);
    if (dec > 0 && evBase > 0) {
      setResult(decToRadix(dec, evBase));
    }
  };
  return (
    <Layout title={'Hello Next.js'}>
      <>
        10進数：
        <input
          type="text"
          defaultValue="0"
          onChange={(ev) => onDecChange(ev)}
        />
        <br />
        基数：
        <input
          type="text"
          defaultValue="0"
          onChange={(ev) => onBaseChange(ev)}
        />
        <br />
        結果：{result}
      </>
    </Layout>
  );
};

export default IndexPage;
