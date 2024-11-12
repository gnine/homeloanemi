
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    const monthlyRate = rate / 12 / 100;
    const emiValue = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
                     (Math.pow(1 + monthlyRate, tenure) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Loan EMI Calculator</title>
        <meta name="description" content="Calculate your home loan EMI easily with our online calculator. Perfect for quick estimations and financial planning." />
      </Head>
      <h1 className={styles.title}>Home Loan EMI Calculator</h1>
      <p className={styles.subtitle}>Quickly calculate your monthly installment with our easy-to-use home loan EMI calculator.</p>
      
      <div className={styles.calculator}>
        <label>Loan Amount (₹):</label>
        <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />

        <label>Interest Rate (% per annum):</label>
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />

        <label>Tenure (Months):</label>
        <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />

        <button onClick={calculateEmi}>Calculate EMI</button>

        {emi && (
          <div className={styles.result}>
            <p>Your Monthly EMI: ₹ {emi}</p>
          </div>
        )}
      </div>

      <section className={styles.faq}>
        <h2 className={styles.subtitle}>Frequently Asked Questions</h2>
        <div className={styles.question}>
          <h3>How is EMI calculated for a home loan?</h3>
          <p>EMI is calculated based on the principal amount, interest rate, and tenure of the loan. Use our calculator to get an accurate estimation.</p>
        </div>
        <div className={styles.question}>
          <h3>What is the difference between EMI and loan tenure?</h3>
          <p>EMI refers to the monthly installment, while tenure is the loan duration in months.</p>
        </div>
        <div className={styles.question}>
          <h3>Does a higher interest rate mean a higher EMI?</h3>
          <p>Yes, a higher interest rate increases your EMI as it impacts the total payable interest over the loan tenure.</p>
        </div>
      </section>
    </div>
  );
}
