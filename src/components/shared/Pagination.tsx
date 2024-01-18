"use client";
type btnType = {
  handleNext: () => void;
  handlePrevious: () => void;
};
const Pagination = (props: btnType) => {
  return (
    <div className="flex bg-white justify-center p-5">
      <p
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        onClick={props.handlePrevious}
      >
        Previous
      </p>

      <p
        className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        onClick={props.handleNext}
      >
        Next
      </p>
    </div>
  );
};

export default Pagination;
