import { useEffect, useState } from "react";

function App() {
  const [openDiv, setOpenDiv] = useState("block");
  const [isDark, setIsDark] = useState(false);

  const openClickMenu = () => setOpenDiv("block");
  const closeClickMenu = () => setOpenDiv("none");
  const toggleDarkTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenDiv("block");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme-variables");
    } else {
      document.body.classList.remove("dark-theme-variables");
    }
  }, [isDark]);

  return (
    <>
      <div className="container">
        {/* ====================== ASIDE ====================== */}
        <aside style={{ display: openDiv }}>
          <div className="top">
            <div className="logo">
              <img src="/images/coin-logo.png" />
              <h2>
                FINAN<span className="primary">CES</span>
              </h2>
            </div>
            <div className="close" id="close-btn">
              <span class="material-symbols-sharp" onClick={closeClickMenu}>
                close
              </span>
            </div>
          </div>

          <div className="sidebar">
            <a href="#" className="active">
              <span class="material-symbols-sharp">dashboard</span>
              <h3>Dashboard</h3>
            </a>
            <a href="#">
              <span class="material-symbols-sharp">person</span>
              <h3>Person</h3>
            </a>
            <a href="#">
              <span class="material-symbols-sharp">list_alt</span>
              <h3>Orders</h3>
            </a>
            <a href="#">
              <span class="material-symbols-sharp">mail</span>
              <h3 className="emial">Email</h3>
              <span className="message-count">10</span>
            </a>
            <a href="#">
              <span class="material-symbols-sharp">settings</span>
              <h3>Settings</h3>
            </a>
            <a href="#" className="logout">
              <span class="material-symbols-sharp">logout</span>
              <h3>Logout</h3>
            </a>
          </div>
        </aside>
        {/* ====================== MAIN ====================== */}
        <main>
          <h1>Dashboard</h1>

          <div className="date">
            <input type="date" />
          </div>

          <div className="insigths">
            {/* ====================== SALES ====================== */}
            <div className="sales">
              <span class="material-symbols-sharp">point_of_sale</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Sales</h3>
                  <h2>$25.000</h2>
                </div>
                <div className="progress">
                  <svg>
                    <circle cx="45" cy="55" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>81%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            {/* ====================== EXPRENSES ====================== */}
            <div className="expenses">
              <span class="material-symbols-sharp">monitoring</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Expenses</h3>
                  <h2>$14.510</h2>
                </div>
                <div className="progress">
                  <svg>
                    <circle cx="45" cy="55" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>54%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            {/* ====================== INCOME ====================== */}
            <div className="income">
              <span class="material-symbols-sharp">database</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Income</h3>
                  <h2>$5.030</h2>
                </div>
                <div className="progress">
                  <svg>
                    <circle cx="45" cy="55" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>65%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
          </div>
          {/* ====================== END OF INSIGTHS ====================== */}
          {/* ====================== RECENT ORDERS ====================== */}
          <div className="recent-orders">
            <h2>Recent Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Number</th>
                  <th>Payment</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mini Drone</td>
                  <td>158</td>
                  <td>$1,499</td>
                  <td className="warning">Pending</td>
                  <td className="primary">Details</td>
                </tr>
                <tr>
                  <td>Mini Drone</td>
                  <td>158</td>
                  <td>$1,499</td>
                  <td className="warning">Pending</td>
                  <td className="primary">Details</td>
                </tr>
                <tr>
                  <td>Mini Drone</td>
                  <td>158</td>
                  <td>$1,499</td>
                  <td className="warning">Pending</td>
                  <td className="primary">Details</td>
                </tr>
                <tr>
                  <td>Mini Drone</td>
                  <td>158</td>
                  <td>$1,499</td>
                  <td className="warning">Pending</td>
                  <td className="primary">Details</td>
                </tr>
                <tr>
                  <td>Mini Drone</td>
                  <td>158</td>
                  <td>$1,499</td>
                  <td className="warning">Pending</td>
                  <td className="primary">Details</td>
                </tr>
              </tbody>
            </table>
            <a href="#">Show All</a>
          </div>
        </main>
        {/* ====================== END OF MAIN ====================== */}
        {/* ====================== RIGHT SIDE ====================== */}
        <div className="right">
          <div className="top">
            <button id="menu-btn" onClick={openClickMenu}>
              <span class="material-symbols-sharp">menu</span>
            </button>
            <div className="theme" onClick={toggleDarkTheme}>
              <span
                className={`material-symbols-sharp ${isDark ? "" : "active"}`}
              >
                partly_cloudy_day
              </span>
              <span
                className={`material-symbols-sharp ${isDark ? "active" : ""}`}
              >
                nights_stay
              </span>
            </div>
            <div className="profile">
              <div className="info">
                <p>
                  Hello, <b>Cristian</b>
                </p>
                <small className="text-muted">Admin</small>
              </div>
              <div className="profile-photo">
                <img src="/images/profile-icon.png" />
              </div>
            </div>
          </div>
          {/* ====================== END OF TOP ====================== */}
          <div className="recent-updates">
            <h2>Recent Updates</h2>
            <div className="updates">
              {/* ====================== 1 UPDATE ====================== */}
              <div className="update">
                <div className="profile-photo">
                  <img src="/images/profile-icon-updates.png" />
                </div>
                <div className="message">
                  <p>
                    <b>Mike I.</b> received the order for the remote control
                    mini drone
                  </p>
                  <small className="text-muted">1 Day ago</small>
                </div>
              </div>
              {/* ====================== 2 UPDATE ====================== */}
              <div className="update">
                <div className="profile-photo">
                  <img src="/images/profile-icon-updates.png" />
                </div>
                <div className="message">
                  <p>
                    <b>Mike I.</b> received the order for the remote control
                    mini drone
                  </p>
                  <small className="text-muted">1 Day ago</small>
                </div>
              </div>
              {/* ====================== 3 UPDATE ====================== */}
              <div className="update">
                <div className="profile-photo">
                  <img src="/images/profile-icon-updates.png" />
                </div>
                <div className="message">
                  <p>
                    <b>Mike I.</b> received the order for the remote control
                    mini drone
                  </p>
                  <small className="text-muted">1 Day ago</small>
                </div>
              </div>
              {/* ====================== 4 UPDATE ====================== */}
              <div className="update">
                <div className="profile-photo">
                  <img src="/images/profile-icon-updates.png" />
                </div>
                <div className="message">
                  <p>
                    <b>Mike I.</b> received the order for the remote control
                    mini drone
                  </p>
                  <small className="text-muted">1 Day ago</small>
                </div>
              </div>
            </div>
          </div>
          {/* ====================== END OF RECENT-UPDATES ====================== */}
          <div className="sales-analytics">
            <h2>Analytics</h2>
            {/* ====================== 1 ITEM ====================== */}
            <div className="item online">
              <div className="icon">
                <span class="material-symbols-sharp">shopping_cart</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>Online Orders</h3>
                  <small className="text-muted">Last 24 hours</small>
                </div>
                <h5 className="success">+39%</h5>
                <h3>2938</h3>
              </div>
            </div>
            {/* ====================== 2 ITEM ====================== */}
            <div className="item offline">
              <div className="icon">
                <span class="material-symbols-sharp">local_mall</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>Offline Orders</h3>
                  <small className="text-muted">Last 24 hours</small>
                </div>
                <h5 className="success">+39%</h5>
                <h3>2938</h3>
              </div>
            </div>
            {/* ====================== 3 ITEM ====================== */}
            <div className="item customer">
              <div className="icon">
                <span class="material-symbols-sharp">person</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>New Customers</h3>
                  <small className="text-muted">Last 24 hours</small>
                </div>
                <h5 className="success">+39%</h5>
                <h3>2938</h3>
              </div>
            </div>
            {/* ====================== 4 ITEM ====================== */}
            <div className="item add-product">
              <div>
                <span class="material-symbols-sharp">add</span>
                <h3>Add Product</h3>
              </div>
            </div>
          </div>
          {/* ====================== END OF SALES-ANALYTICS ====================== */}
        </div>
      </div>
    </>
  );
}

export default App;
