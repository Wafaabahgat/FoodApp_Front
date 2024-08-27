const formAuth = ({ ttl, disc, children }) => {
  return (
    <div className="w-[550px] max-h-[5200px]">
      <h2 className="mt-4 mb-6 text-2xl text-center text-color_white">{ttl}</h2>
      <p className="flex items-start mb-3 ml-6 text-lg font-bold text-color_white">
        {disc}
      </p>
      {children}
    </div>
  );
};

export default formAuth;
