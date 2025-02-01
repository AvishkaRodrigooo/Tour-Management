import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import '../styles/admin-dashboard.css';


const AdminDashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const location = useLocation(); // Tracks route changes

  // Close sidebar when a menu item is clicked
  const handleMenuClick = () => {
    setIsSidebarVisible(false);
  };

  return (
    <section className="admin-dashboard">
      <Container fluid>
        <Row>
          {/* Sidebar - Only shows if isSidebarVisible is true */}
          {isSidebarVisible && (
            <Col lg="3" md="4" className="sidebar">
              <div className="admin-menu">
                <h4 className="menu-title">Admin Panel</h4>
                <ul>
                  <li><Link to="/admin/users" onClick={handleMenuClick}>Manage Users</Link></li>
                  <li><Link to="/admin/tours" onClick={handleMenuClick}>Manage Tours</Link></li>
                  <li><Link to="/admin/bookings" onClick={handleMenuClick}>Bookings</Link></li>
                  <li><Link to="/admin/settings" onClick={handleMenuClick}>Settings</Link></li>
                </ul>
              </div>
            </Col>
          )}

          {/* Main Content */}
          <Col lg={isSidebarVisible ? "9" : "12"} md={isSidebarVisible ? "8" : "12"}>
            <div className="dashboard-content">
              <h2 className="dashboard-title">Welcome, Admin</h2>

              {/* Toggle Sidebar Button */}
              <Button className="btn primary__btn mt-2" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
              </Button>

              {/* Dashboard Stats */}
              <Row>
                <Col lg="4" md="6">
                  <Card className="dashboard-card">
                    <CardBody>
                      <h3></h3>
                      <p>Total Users</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card className="dashboard-card">
                    <CardBody>
                      <h3></h3>
                      <p>Active Bookings</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card className="dashboard-card">
                    <CardBody>
                      <h3></h3>
                      <p>Available Tours</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              {/* Logout Button */}
              <Button className="btn primary__btn mt-4">
                <Link to="/home">Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AdminDashboard;
