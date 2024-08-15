import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  Filler,
} from 'chart.js';
import './Dashboard.css';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Overview');
  const [users, setUsers] = useState([]);
  const [sharers, setSharers] = useState([]);
  const [riders, setRiders] = useState([]);
  const [bookingStatus, setBookingStatus] = useState({ total: 0, pending: 0, completed: 0 });


    useEffect(() => {
        const fetchData = async () => {
          try {
            const usersResponse = await axios.get('/api/users');
            setUsers(usersResponse.data);
      
            const sharersResponse = await axios.get('/api/sharers');
            setSharers(sharersResponse.data);
      
            const ridersResponse = await axios.get('/api/riders');
            setRiders(ridersResponse.data);
      
            const bookingStatusResponse = await axios.get('/api/booking-status');
            setBookingStatus(bookingStatusResponse.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

    fetchData();
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'User Details':
        return (
          <div>
            <h2>User Details</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Confirm Password</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.confirm_password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Sharer Details':
        return (
          <div>
            <h2>Sharer Details</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Identity Proof</th>
                  <th>Bank Details</th>
                </tr>
              </thead>
              <tbody>
                {sharers.map((sharer) => (
                  <tr key={sharer.id}>
                    <td>{sharer.id}</td>
                    <td>{sharer.name}</td>
                    <td>{sharer.phone}</td>
                    <td>{sharer.email}</td>
                    <td>{sharer.city}</td>
                    <td>{sharer.identity_proof}</td>
                    <td>{sharer.bank_details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Rider Details':
        return (
          <div>
            <h2>Rider Details</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>License</th>
                  <th>Vehicle Registration</th>
                  <th>Identity Proof</th>
                  <th>Bank Details</th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider) => (
                  <tr key={rider.id}>
                    <td>{rider.id}</td>
                    <td>{rider.name}</td>
                    <td>{rider.phone}</td>
                    <td>{rider.email}</td>
                    <td>{rider.city}</td>
                    <td>{rider.license}</td>
                    <td>{rider.vehicle_registration}</td>
                    <td>{rider.identity_proof}</td>
                    <td>{rider.bank_details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        case 'Overview':
            return (
              <div className="overview">
                <h2>Dashboard Overview</h2>
                <div className="cards">
                  <div className="card">
                    <h3>Total Users</h3>
                    <p>{users.length}</p> {/* Total Users */}
                  </div>
                  <div className="card">
                    <h3>Total Sharers</h3>
                    <p>{sharers.length}</p> {/* Total Sharers */}
                  </div>
                  <div className="card">
                    <h3>Total Riders</h3>
                    <p>{riders.length}</p> {/* Total Riders */}
                  </div>
                  <div className="card">
                    <h3>Booking Status</h3>
                    <p>Total: {bookingStatus.total}</p> {/* Total Bookings */}
                    <p>Pending: {bookingStatus.pending}</p> {/* Pending Bookings */}
                    <p>Completed: {bookingStatus.completed}</p> {/* Completed Bookings */}
                  </div>
                </div>
                <div className="charts">
                  <div className="chart">
                    <h3>User Registrations</h3>
                    <Line
                      data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        datasets: [
                          {
                            label: 'Registrations',
                            data: users.map(user => user.registrationCount), // Use actual data from API
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderWidth: 1,
                            fill: true,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            display: true,
                            position: 'top',
                          },
                          tooltip: {
                            callbacks: {
                              label: function (tooltipItem) {
                                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                              },
                            },
                          },
                        },
                        scales: {
                          x: {
                            title: {
                              display: true,
                              text: 'Month',
                            },
                          },
                          y: {
                            title: {
                              display: true,
                              text: 'Number of Registrations',
                            },
                          },
                        },
                      }}
                    />
                  </div>
                  <div className="chart">
                    <h3>Sharer and Rider Trends</h3>
                    <Bar
                      data={{
                        labels: ['Sharers', 'Riders'],
                        datasets: [
                          {
                            label: 'Counts',
                            data: [sharers.length, riders.length],
                            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                            borderWidth: 1,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            display: true,
                            position: 'top',
                          },
                          tooltip: {
                            callbacks: {
                              label: function (tooltipItem) {
                                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                              },
                            },
                          },
                        },
                        scales: {
                          x: {
                            title: {
                              display: true,
                              text: 'Category',
                            },
                          },
                          y: {
                            title: {
                              display: true,
                              text: 'Count',
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          
      default:
        return <div>Welcome to the Dashboard!</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <button onClick={() => setActiveSection('Overview')}>Overview</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('User Details')}>User Details</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('Sharer Details')}>Sharer Details</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('Rider Details')}>Rider Details</button>
          </li>
        </ul>
      </div>
      <div className="dashboard-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
