// TileWithdraw.js
import { type Account } from "@domain/account/account";
import { useState } from "react";

export default function TileWithdraw({
  account,
  onWithdraw,
}: {
  account: Account;
  onWithdraw: (amount: number) => void;
}) {
  const [amount, setAmount] = useState(0);

  const handleWithdraw = () => {
    if (account.getBalance() < amount) {
      alert("Insufficient funds");
      return;
    }
    onWithdraw(amount);
  };

  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold">Withdraw</h3>
      <p className="mb-2">How much would you like to withdraw</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        className="input input-bordered mb-2 w-full"
        placeholder="Enter amount"
      />
      <button className="btn btn-primary" onClick={handleWithdraw}>
        Withdraw
      </button>
    </div>
  );
}