export default function ZeusAlgoDashboard() {
  return (
    <div className="text-white bg-zinc-900 p-6 rounded-xl shadow-xl">
      <h1 className="text-2xl font-bold mb-4">📊 ZeusAlgo Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-zinc-800 p-4 rounded-lg">
          <p className="text-gray-400">Semnale Buy</p>
          <p className="text-green-400 font-semibold text-xl">12</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg">
          <p className="text-gray-400">Semnale Sell</p>
          <p className="text-red-400 font-semibold text-xl">7</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg col-span-2">
          <p className="text-gray-400">Ultimul semnal</p>
          <p className="font-medium">ETH/USDT - BUY @ $2590 - TF: 3h</p>
        </div>
      </div>
    </div>
  );
}