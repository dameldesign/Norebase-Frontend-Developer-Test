import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Coins } from 'lucide-react';
import CoinTable from './components/CoinTable';
import CoinModal from './components/CoinModal';
import { CoinData } from './types';

function App() {
  const [coins, setCoins] = React.useState<CoinData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<CoinData | null>(null);
  const [modalLoading, setModalLoading] = useState(false);

  const itemsPerPage = 10;
  const start = (currentPage - 1) * itemsPerPage;

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.coinlore.net/api/tickers/');
        const data = await response.json();
        setCoins(data.data);
        setError(null);
      } catch (err: unknown) {
        setError('Failed to fetch cryptocurrency data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
    const interval = setInterval(fetchCoins, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const handleCoinClick = async (coin: CoinData) => {
    setSelectedCoin(coin);
    setModalLoading(true);
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    setModalLoading(false);
  };

  const totalPages = Math.ceil(coins.length / itemsPerPage);
  const currentCoins = coins.slice(start, start + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Coins className="w-10 h-10 text-yellow-400" />
          <h1 className="text-4xl font-bold text-center">Crypto Tracker</h1>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 shadow-xl">
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
            </div>
          ) : (
            <>
              <CoinTable coins={currentCoins} onCoinClick={handleCoinClick} />
              
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Showing {start + 1} to {Math.min(start + itemsPerPage, coins.length)} of {coins.length} entries
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous
                  </button>
                  
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="text-center mt-6 text-gray-400 text-sm">
          Data provided by CoinLore API • Auto-refreshes every minute
        </div>
      </div>

      <CoinModal
        coin={selectedCoin}
        isOpen={selectedCoin !== null}
        onClose={() => setSelectedCoin(null)}
        isLoading={modalLoading}
      />
    </div>
  );
}

export default App;