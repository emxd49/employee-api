const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    switch (statusCode) {
      case 400:
        res.json({ title: "Bad Request", message: err.message });
        break;
      case 401:
        res.json({ title: "Not Authorized", message: err.message });
        break;
      case 403:
        res.json({ title: "Forbidden", message: err.message });
        break;
      case 404:
        res.json({ title: "Not Found", message: err.message });
        break;
      default:
        res.json({ title: "Internal Server Error", message: err.message });
        break;
    }
  };
  module.exports = { errorHandler };
  