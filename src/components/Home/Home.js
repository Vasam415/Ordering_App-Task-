import React from "react";
import {  Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { removeOrder } from "../../store/orderSlice";
import './Home.css';

const Home = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeOrder(id));
  };

  return (
    <div className="container">
      <h1>Order List</h1>
      <table >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Delete Item</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.firstName}</td>
              <td>{order.lastName}</td>
              <td>{order.description}</td>
              <td>{order.quantity}</td>
              <td>
                <button className="delete" onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/new"><button>Add New Item</button></Link>
    </div>
  );
};

export default Home;
