import "./App.css";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  


ChartJS.register(CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const balances = [
    { currency: "USD", amount: "13,925.87", flag: "🇺🇸" },
    { currency: "NGN", amount: "2,243,925.87", flag: "🇳🇬" },
    { currency: "GBP", amount: "13,925.87", flag: "🇬🇧" },
    { currency: "KES", amount: "2,243,925.87", flag: "🇰🇪" },
  ];

  const inflowData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Inflows",
        data: [100, 300, 200, 400, 0, 0, 0],
        backgroundColor: "#00ff88",
        borderRadius: 5,
      },
    ],
  };
  
  const outflowData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Outflows",
        data: [200, 100, 300, 150, 0, 0, 0],
        backgroundColor: "#ff5555",
        borderRadius: 5,
      },
    ],
  };
  

  const transactions = [
    {
      name: "Taye Taiwo",
      amount: "$47,900",
      source: "NGN Balance",
      status: "Successful",
    },
    {
      name: "Sola Alyson",
      amount: "$13,250",
      source: "GBP Balance",
      status: "Failed",
    },
    {
      name: "Yinka Ayefele",
      amount: "$140,900",
      source: "KES Balance",
      status: "Pending",
    },
    {
      name: "Travis Scott",
      amount: "$82,315",
      source: "USD Balance",
      status: "Failed",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Total Balance: ₦231,925,750.87</h2>
      <div className="balance-cards">
        {balances.map((b) => (
          <div className="card" key={b.currency}>
            <span style={{ fontSize: "24px" }}>{b.flag}</span>
            <p>{b.currency} Balance</p>
            <h3>{b.amount}</h3>
          </div>
        ))}
      </div>

      <div className="charts">
        <div className="chart">
          <h3>Inflows</h3>
          {/* <Bar data={inflowData} /> */}
          <p>Chart Placeholder</p>
          {/* <Bar data={inflowData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} /> */}
        </div>
        <div className="chart">
          <h3>Outflows</h3>
          {/* <Bar data={outflowData} /> */}
          <p>Chart Placeholder</p>
          {/* <Bar data={outflowData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} /> */}
        </div>
      </div>




      <div className="transactions">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Recipient</th>
              <th>Amount</th>
              <th>Source</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i}>
                <td>{tx.name}</td>
                <td>{tx.amount}</td>
                <td>{tx.source}</td>
                <td
                  className={
                    tx.status === "Successful"
                      ? "successful"
                      : tx.status === "Failed"
                      ? "failed"
                      : "pending"
                  }
                >
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
