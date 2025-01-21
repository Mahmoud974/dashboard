import { ArrowUpDown } from "lucide-react";

// Function to render stars for the rating
const renderStars = (rating) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
  return (
    <div className="flex">
      {[...Array(filledStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="text-yellow-400"
          viewBox="0 0 16 16"
        >
          <path d="M8 12.693l-3.717 2.26.704-4.516L1.62 6.907l4.542-.395L8 2.029l1.836 4.483 4.542.395-3.367 3.53.704 4.516L8 12.693z" />
        </svg>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="text-gray-300"
          viewBox="0 0 16 16"
        >
          <path d="M8 12.693l-3.717 2.26.704-4.516L1.62 6.907l4.542-.395L8 2.029l1.836 4.483 4.542.395-3.367 3.53.704 4.516L8 12.693z" />
        </svg>
      ))}
    </div>
  );
};

export default function Table() {
  const tableData = [
    {
      no: "01",
      type: "Social Ads",
      status: "Completed",
      owner: {
        name: "John Michael",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      cost: "$500",
      order: "1234",
      rating: 4.5,
    },
    {
      no: "02",
      type: "Email",
      status: "Pending",
      owner: {
        name: "Alexa Liras",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      cost: "$300",
      order: "1235",
      rating: 3,
    },
    {
      no: "03",
      type: "Social Ads",
      status: "Canceled",
      owner: {
        name: "Laurent Perrier",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      cost: "$200",
      order: "1236",
      rating: 2,
    },
  ];

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "Pending":
        return "bg-yellow-500";
      case "Canceled":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="w-full mt-7 ">
      {/* Container for horizontal scrolling */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px] border rounded-lg shadow-md bg-white">
          <table className="w-full text-slate-800">
            <thead>
              <tr className="text-slate-500 border-b bg-slate-50">
                <th className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <p className="text-sm font-normal">No</p>
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="p-4 text-center">Type</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Owner</th>
                <th className="p-4 text-center">Cost</th>
                <th className="p-4 text-center">Order</th>
                <th className="p-4 text-center">Rating</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="p-4 text-center">{item.no}</td>
                  <td className="p-4 text-center">{item.type}</td>
                  <td className="p-4 text-center flex items-center justify-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${getStatusColor(
                        item.status
                      )}`}
                    ></div>
                    <span>{item.status}</span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={item.owner.photo}
                        alt={item.owner.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{item.owner.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">{item.cost}</td>
                  <td className="p-4 text-center">{item.order}</td>
                  <td className="p-4 text-center">
                    {renderStars(item.rating)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
