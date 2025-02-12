const AboutCard = ({ item }) => {
  return (
    <div className="p-6 bg-gradient-to-r from-cyan-500 to-blue-600 group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="text-4xl mb-4 text-white group-hover:text-blue-100 transition">
        {item.icon}
      </div>
      <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-white mb-3 group-hover:text-blue-100">{item.question}</h3>
      <p className="hidden sm:text-sm xl:text-base group-hover:block mt-2 text-slate-200 group-hover:text-blue-200 transition">
        {item.answer}
      </p>
    </div>
  );
};

export default AboutCard;