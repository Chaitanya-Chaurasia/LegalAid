import {
  Flex,
  Center,
  Heading,
  Input,
  Button,
  Image,
  Box,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  IconButton,
  Checkbox,
  Link,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; // Import icons for password visibility
import React, { useState } from "react"; // Import useState for password visibility toggle

import google from "./assets/google.png"; // Assuming the path is correct

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Center w={"100%"} h={"100vh"} bgGradient="linear(to-r, teal.500, blue.500)">
      {" "}
      {/* Enhanced background */}
      <Box
        p={8}
        maxWidth="md" // Set a max width for larger screens
        borderWidth={1}
        borderRadius={12} // Increased border radius
        boxShadow="lg" // Added a larger shadow
        bg={"white"} // Changed background to white for better contrast
        w={"95%"} // Make it slightly responsive
      >
        <VStack spacing={6} alignItems="stretch">
          {" "}
          {/* Use VStack for vertical spacing */}
          <Heading as="h2" size="xl" textAlign="center" color="gray.700">
            {" "}
            {/* Enhanced heading style */}
            Welcome Back!
          </Heading>

          <Text fontSize="lg" textAlign="center" color="gray.600">
            Sign in to your account
          </Text>

          <FormControl id="username">
            <FormLabel color="gray.600">Username or Email address</FormLabel>
            <Input
              placeholder="Enter your username or email"
              bg={"gray.100"} // Lighter background for input
              borderColor="gray.300"
              _hover={{ borderColor: "blue.400" }} // Hover effect
              _focus={{ borderColor: "blue.400", boxShadow: "outline" }} // Focus effect
            />
            {/* <FormErrorMessage>Error message here</FormErrorMessage> */}
          </FormControl>

          <FormControl id="password">
            <FormLabel color="gray.600">Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                bg={"gray.100"} // Lighter background for input
                borderColor="gray.300"
                _hover={{ borderColor: "blue.400" }} // Hover effect
                _focus={{ borderColor: "blue.400", boxShadow: "outline" }} // Focus effect
              />
              <InputRightElement width="3rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  onClick={handleShowClick}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  variant="ghost" // Ghost variant for icon button
                />
              </InputRightElement>
            </InputGroup>
            {/* <FormErrorMessage>Error message here</FormErrorMessage> */}
          </FormControl>

          <HStack justifyContent="space-between">
            {" "}
            {/* HStack for horizontal alignment */}
            <Checkbox colorScheme="teal">Remember me</Checkbox>
            <Link color={"teal.500"} href="#">
              Forgot password?
            </Link>
          </HStack>

          <Button colorScheme="teal" size="lg" width="full">
            {" "}
            {/* Themed button */}
            Login
          </Button>

          <HStack spacing={2} justifyContent="center" width="full">
            <Box flex={1} height="1px" bg="gray.300" />
            <Text fontSize="sm" color="gray.500">
              OR
            </Text>
            <Box flex={1} height="1px" bg="gray.300" />
          </HStack>

          <Button
            variant="outline" // Outline variant for secondary action
            size="lg"
            width="full"
            leftIcon={<Image src={google} alt="Google Logo" boxSize="20px" />} // Use Chakra Image component
            colorScheme="gray" // Gray color scheme for outline button
          >
            Log in with Google
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
