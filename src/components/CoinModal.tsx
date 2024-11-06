import React from "react";
import { X, DollarSign, Bitcoin, BarChart3, Clock } from "lucide-react";
import { CoinModalProps } from "../types";
import ModalSkeleton from "./ui/ModalSkeleton";
import ChangeCard from "./ChangeCard";
import PriceCard from "./PriceCard";
import InfoRow from "./InfoRow";

const CoinModal: React.FC<CoinModalProps> = ({
  coin,
  isOpen,
  onClose,
  isLoading,
}) => {
  /**
  |--------------------------------------------------
  | Render nothing if the modal is not open
  |--------------------------------------------------
  */
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        {/**
        |--------------------------------------------------
        | Close button to dismiss the modal
        |--------------------------------------------------
        */}

        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-700/50 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        {/**
        |--------------------------------------------------
        | Display loading skeleton or coin data
        |--------------------------------------------------
        */}
        {isLoading ? (
          <ModalSkeleton />
        ) : coin ? (
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-400/10 p-3 rounded-full">
                <DollarSign className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{coin.name}</h2>
                <p className="text-gray-400">{coin.symbol}</p>
              </div>
            </div>
            {/**
            |--------------------------------------------------
            | Display current price and bitcoin price
            |--------------------------------------------------
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <PriceCard
                title="Current Price"
                value={`$${parseFloat(coin.price_usd).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}`}
                icon={<DollarSign className="w-5 h-5" />}
              />
              <PriceCard
                title="Bitcoin Price"
                value={`₿${parseFloat(coin.price_btc).toFixed(8)}`}
                icon={<Bitcoin className="w-5 h-5" />}
              />
            </div>
            {/**
            |--------------------------------------------------
            | Display
            1h, 24h, and 7d change percentages
            |--------------------------------------------------
            */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <ChangeCard
                title="1h Change"
                value={parseFloat(coin.percent_change_1h)}
              />
              <ChangeCard
                title="24h Change"
                value={parseFloat(coin.percent_change_24h)}
              />
              <ChangeCard
                title="7d Change"
                value={parseFloat(coin.percent_change_7d)}
              />
            </div>

            {/**
            |--------------------------------------------------
            |  Display market information rows
            |--------------------------------------------------
            */}

            <div className="space-y-4">
              <InfoRow
                title="Market Cap"
                value={`$${parseInt(coin.market_cap_usd).toLocaleString()}`}
                icon={<BarChart3 className="w-5 h-5 text-blue-400" />}
              />
              <InfoRow
                title="24h Volume"
                value={`$${parseInt(coin.volume24).toLocaleString()}`}
                icon={<Clock className="w-5 h-5 text-purple-400" />}
              />
              <InfoRow
                title="Circulating Supply"
                value={`${parseInt(coin.csupply).toLocaleString()} ${
                  coin.symbol
                }`}
                icon={<BarChart3 className="w-5 h-5 text-green-400" />}
              />
              {coin.tsupply && (
                <InfoRow
                  title="Total Supply"
                  value={`${parseInt(coin.tsupply).toLocaleString()} ${
                    coin.symbol
                  }`}
                  icon={<BarChart3 className="w-5 h-5 text-yellow-400" />}
                />
              )}
              {coin.msupply && (
                <InfoRow
                  title="Max Supply"
                  value={`${parseInt(coin.msupply).toLocaleString()} ${
                    coin.symbol
                  }`}
                  icon={<BarChart3 className="w-5 h-5 text-red-400" />}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="p-6 text-center text-gray-400">
            No coin data available
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinModal;
