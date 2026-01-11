const Apps = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <header className="mb-10">
          <h1 className="text-2xl font-medium text-gray-900 mb-2">
            Understanding the Kite Dashboard
          </h1>
          <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
            This page explains how to read and use the Kite interface to track
            your portfolio, monitor markets, and manage trades effectively.
          </p>
        </header>

        <div className="space-y-14">

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b pb-10">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Portfolio Summary
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                The summary provides a quick snapshot of your available balance,
                total investment, current portfolio value, and overall profit or
                loss.
              </p>
            </div>
            <div>
              <img
                src="/summary.png"
                alt="Portfolio summary"
                className="w-full border rounded-sm"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b pb-10">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Watchlist
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                The watchlist shows real-time market prices for the stocks you
                track. From here, you can quickly initiate buy or sell actions.
              </p>
            </div>
            <div>
              <img
                src="/watchlist.png"
                alt="Watchlist"
                className="w-full border rounded-sm"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b pb-10">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Orders
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Orders help you track all buy and sell requests along with their
                execution status such as open, completed, or cancelled.
              </p>
            </div>
            <div>
              <img
                src="/orders.png"
                alt="Orders"
                className="w-full border rounded-sm"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b pb-10">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Positions
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Positions represent active trades, usually intraday, showing
                real-time profit or loss until they are closed.
              </p>
            </div>
            <div>
              <img
                src="/positions.png"
                alt="Positions"
                className="w-full border rounded-sm"
              />
            </div>
          </section>

          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b pb-10">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Holdings
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Holdings show your long-term investments including quantity,
                average cost, current value, and total profit or loss.
              </p>
            </div>
            <div>
              <img
                src="/holdings.png"
                alt="Holdings"
                className="w-full border rounded-sm"
              />
            </div>
          </section>

        
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b pb-10">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Investment vs Current Value
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                This chart compares the amount of capital invested with the
                current market value of your portfolio.
              </p>
            </div>
            <div>
              <img
                src="/portfolio-bar.png"
                alt="Investment vs value"
                className="w-full border rounded-sm"
              />
            </div>
          </section>

         
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Portfolio Allocation
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                The allocation chart shows how your investments are distributed
                across different stocks, helping you understand diversification.
              </p>
            </div>
            <div>
              <img
                src="/portfolio-donut.png"
                alt="Portfolio allocation"
                className="w-full border rounded-sm"
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Apps;
