import { Header } from "@UI/layout/Header/Header";
import AccountBalance from "@UI/AccountBalance";
import TileDeposit from "@UI/TileDeposit";
import TileStatement from "@UI/TileStatement";
import TileWithdraw from "@UI/TileWithdraw";
import Head from "next/head";
import { useAccount } from "@utils/accountUtils";

export default function Home() {
  const { account, deposit, getStatement, withdraw } = useAccount();

  return (
    <>
      <Head>
        <title>Bob&apos;s Bank </title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-base-200">
        <AccountBalance account={account} />

        <div className="mx-auto flex justify-around py-8 sm:px-6 sm:py-12 lg:px-8">
          <TileDeposit onDeposit={(amount) => deposit(new Date(), amount)} />
          <TileStatement onShowStatement={() => console.log(getStatement())} />
          <TileWithdraw
            account={account}
            onWithdraw={(amount) => withdraw(new Date(), amount)}
          />
        </div>
      </main>
    </>
  );
}
