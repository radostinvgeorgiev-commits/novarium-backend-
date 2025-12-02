exports.getStatus = () => {
  return {
    status: "ok",
    timestamp: new Date().toISOString()
  };
};
