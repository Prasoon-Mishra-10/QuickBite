const shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e,index) => (
          <div key={index} className="shimer-card"></div>
        ))}
    </div>
  );
};

export default shimmer;
