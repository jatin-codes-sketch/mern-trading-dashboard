import React from "react";
import {Link} from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-6 mx-auto text-center">

          {/* Illustration */}
          <img
            src="/media/notFound.jpg"   // put any professional error image here
            alt="Error"
            className="img-fluid mb-4"
            style={{ maxHeight: "470px" }}
          />

          {/* Error Code */}
          <h1 className="display-4 fw-bold text-dark">404</h1>

          {/* Message */}
          <h5 className="mb-3 text-muted">
            We couldn’t find the page you’re looking for.
          </h5>

          <p className="text-secondary mb-4">
            The page may have been moved, deleted, or the URL might be incorrect.
          </p>

          {/* Actions */}
          <div className="d-flex justify-content-center gap-3">
            <Link to='/' className="btn btn-primary px-4">
              Go to Home
            </Link>
            <button
              className="btn btn-outline-secondary px-4"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
