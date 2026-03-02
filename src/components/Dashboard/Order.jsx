import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client"; // adjust path if needed

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    authApiClient
      .get("/orders/")
      .then((res) => {
        setOrders(res.data.results || res.data); // handles both cases
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="mt-6">Loading orders...</div>;
  return (
    <div className="mt-6 card bg-base-100 shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-lg">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    No Orders Found
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>
                      <div className="badge badge-outline">{order.status}</div>
                    </td>
                    <td>{new Date(order.created_at).toLocaleDateString()}</td>
                    <td>${order.total_price}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
