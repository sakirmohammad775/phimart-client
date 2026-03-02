import axios from "axios";

export default axios.create({
  baseURL: "https://phimart-ivory.vercel.app/api/v1",
});

// "user":1,
// "items":[
//   {
//     id:1,
//     "products":{
//       id:39,
//       "name":"Mystery Novel",
//       "price":304.49
//     },
//     "quantity":2,
//     "total_price":608.98
//   }
// ]