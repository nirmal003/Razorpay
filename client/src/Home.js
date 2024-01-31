import { Box, Stack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Card from "./Card.js";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("https://razorpay-wheat.vercel.app/api/getkey");

    const {
      data: { order },
    } = await axios.post("https://razorpay-wheat.vercel.app/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
      callback_url: "https://razorpay-wheat.vercel.app/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={["column", "row"]}
      >
        <Card
          amount={5000}
          img={
            "https://tse2.mm.bing.net/th?id=OIP.jw-hh-7JWvedyEv-2qekaQHaE3&pid=Api&P=0&h=180"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={3000}
          img={
            "https://tse1.mm.bing.net/th?id=OIP.Q8VRvqDHUvwyyMdPwOWO7gHaEK&pid=Api&P=0&h=180"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
