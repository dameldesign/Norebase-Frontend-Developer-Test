
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CoinData } from '../types';

interface CoinTableProps {
  coins: CoinData[];
  onCoinClick: (coin: CoinData) => void;
}

function CoinTable({ coins, onCoinClick }: CoinTableProps) {
  /**
  |--------------------------------------------------
  | Render a responsive table displaying coin data
  |--------------------------------------------------
  */
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-gray-700">
            {/**
            |--------------------------------------------------
            | Define table headers for rank, name, symbol, 
            | price, 24h change, and market cap
            |--------------------------------------------------
            */}
            <th className="pb-4 font-medium text-gray-400">Rank</th>
            <th className="pb-4 font-medium text-gray-400">Name</th>
            <th className="pb-4 font-medium text-gray-400">Symbol</th>
            <th className="pb-4 font-medium text-gray-400 text-right">Price (USD)</th>
            <th className="pb-4 font-medium text-gray-400 text-right">24h Change</th>
            <th className="pb-4 font-medium text-gray-400 text-right">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {/**
          |--------------------------------------------------
          | Map through coins array and render a table row 
          | for each coin with data and click functionality
          |--------------------------------------------------
          */}
          {coins.map((coin) => (
            <tr
              key={coin.id}
              onClick={() => onCoinClick(coin)}
              className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors cursor-pointer"
            >
              {/**
              |--------------------------------------------------
              | Display rank of the coin
              |--------------------------------------------------
              */}
              <td className="py-4">{coin.rank}</td>

              {/**
              |--------------------------------------------------
              | Display name of the coin with medium font weight
              |--------------------------------------------------
              */}
              <td className="py-4 font-medium">{coin.name}</td>

              {/**
              |--------------------------------------------------
              | Display coin symbol in a lighter font color
              |--------------------------------------------------
              */}
              <td className="py-4 text-gray-400">{coin.symbol}</td>

              {/**
              |--------------------------------------------------
              | Display coin's price in USD, formatted to two 
              | decimal places, aligned to the right
              |--------------------------------------------------
              */}
              <td className="py-4 text-right">
                ${parseFloat(coin.price_usd).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>

              {/**
              |--------------------------------------------------
              | Display 24-hour price change with icon indicating 
              | increase or decrease, styled with color accordingly
              |--------------------------------------------------
              */}
              <td className="py-4 text-right">
                <span className={`flex items-center justify-end gap-1 ${
                  parseFloat(coin.percent_change_24h) >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {parseFloat(coin.percent_change_24h) >= 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {Math.abs(parseFloat(coin.percent_change_24h)).toFixed(2)}%
                </span>
              </td>

              {/**
              |--------------------------------------------------
              | Display market cap in USD, formatted with commas
              | aligned to the right
              |--------------------------------------------------
              */}
              <td className="py-4 text-right">
                ${parseInt(coin.market_cap_usd).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable;
