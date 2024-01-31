import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Paymentsuccess = () => {
  const params = useSearchParams()[0];

  return (
    <Box>
      <VStack h={"100vh"} justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>order successfully</Heading>
        <Text>Reference No. {params.get("reference")}</Text>
      </VStack>
    </Box>
  );
};

export default Paymentsuccess;
