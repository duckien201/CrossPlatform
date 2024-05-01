const OrderModel = require('../model/OrderModel')


exports.order = async (req, res, next) => {
    try {
      if (
        !req.body.name ||
        !req.body.address ||
        !req.body.phone ||
        !req.body.nameProduct ||
        !req.body.price
      ) {
        return res
          .status(400)
          .json({ message: "Vui lòng điền đầy đủ thông tin !" });
      }
  
      const order = new OrderModel(req.body);
      const result = await order.save();
  
      res.json({ message: "Đặt hàng thành công!", user: result });
    } catch (error) {
      next(error);
    }
  }