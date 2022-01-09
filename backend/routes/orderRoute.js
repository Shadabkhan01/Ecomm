const express = require("express");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const orderRouter =express.Router();

orderRouter.route("/order/new").post(isAuthenticatedUser, newOrder);
orderRouter.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
orderRouter.route("/orders/me").get(isAuthenticatedUser, myOrders);
orderRouter
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

  orderRouter
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = orderRouter;