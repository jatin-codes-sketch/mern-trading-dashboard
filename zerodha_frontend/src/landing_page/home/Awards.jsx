const Awards = () => {
  return (
    <section className="container d-flex" style={{minHeight:"80vh"}}>
      <div className="row align-items-center">
        
        <div className="col-md-6 mb-5 mb-md-0 " >
          <img
            src="/media/largestBroker.svg"
            alt="Largest broker"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h2>Largest stock broker in India</h2>

          <p className="text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds & government securities</li>
              </ul>
            </div>
          </div>

          <img
            src="/media/pressLogos.png"
            alt="Press logos"
            className="img-fluid mt-3"
            style={{width:"100%"}}
          />
        </div>

      </div>
    </section>
  );
};

export default Awards;
