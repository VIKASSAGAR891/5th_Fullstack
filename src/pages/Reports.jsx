import { useSelector } from "react-redux";
import { useMemo, useContext } from "react";
import { AppContext } from "../context/AppContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Reports() {
  const items = useSelector((state) => state.cart.items);
  const { theme } = useContext(AppContext);

  const totalItems = useMemo(() => items.length, [items]);

  const totalRevenue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2>Reports</h2>

        <p>
          <strong>Current Theme:</strong> {theme}
        </p>

        <p>
          <strong>Total Courses Added:</strong> {totalItems}
        </p>

        <p>
          <strong>Total Revenue:</strong> ${totalRevenue}
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Reports;