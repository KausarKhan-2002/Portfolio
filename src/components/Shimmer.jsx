const Shimmer = () => {
  return (
    <div role="status" className="max-w-full animate-pulse">
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 w-full py-10 mb-4"></div>
      <div className="flex justify-between px-20">
        <div className="w-52 h-52 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="w-52 h-52 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-32 h-14 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-56 h-14 bg-gray-200 rounded-b-full dark:bg-gray-700 mt-10"></div>
      </div>
      {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div> */}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Shimmer;
