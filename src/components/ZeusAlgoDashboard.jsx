import { useEffect, useState } from "react";
import './dashboard.css';

export default function ZeusAlgoDashboard() {
  const [signals, setSignals] = useState([
    { type: "buy", symbol: "BTC/USDT", price: "$63,200", tf: "1h" },
    { type: "sell", symbol: "ETH/USDT", price: "$3,120", tf: "15m" },
    { type: "buy", symbol: "SOL/USDT", price: "$142", tf: "5m" },
  ]);

  return (
    <div className="bg-dark min-h-screen p-8 font-uncial text-white">
      <h1 className="text-4xl text-center mb-10">🧙‍♀️ ZeusAlgo Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {signals.map((signal, index) => (
          <div
            key={index}
            className={`signal-card ${
              signal.type === "buy" ? "border-glow-green" : "border-glow-red"
            }`}
          >
            <p className="text-sm text-gray-400">{signal.type.toUpperCase()}</p>
            <p className="text-xl font-bold">{signal.symbol}</p>
            <p className="text-md">{signal.price}</p>
            <p className="text-xs italic">TF: {signal.tf}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
