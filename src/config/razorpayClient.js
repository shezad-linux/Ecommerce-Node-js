const Razorpay = require('razorpay');

apiKey="Enter your Api Key"
apiSecret="Enter your Secret Code"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;