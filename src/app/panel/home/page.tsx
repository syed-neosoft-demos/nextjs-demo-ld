const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-2 grid-rows-4   m-10 rounded-sm h-full  ">
      {[0, 1, 2, 3].map((el) => (
        <div
          className="bg-white shadow-sm rounded-md p-2 hover:scale-105 cursor-pointer"
          key={el}
        >
          <h2 className="font-semibold">Total Users</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
