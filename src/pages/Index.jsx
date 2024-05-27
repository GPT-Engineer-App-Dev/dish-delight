import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack, Icon, useToast } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaStar } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [ratings, setRatings] = useState({
    recipe1: 0,
    recipe2: 0,
    recipe3: 0,
  });

  const toast = useToast();

  const handleRate = (recipe, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [recipe]: rating,
    }));
    toast({
      title: "Rating submitted.",
      description: `You rated ${recipe} with ${rating} stars.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const StarRating = ({ rating, onRate }) => {
    const [hover, setHover] = useState(null);

    return (
      <HStack spacing={1}>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <Icon
              key={index}
              as={FaStar}
              boxSize={6}
              color={ratingValue <= (hover || rating) ? "teal.500" : "gray.300"}
              cursor="pointer"
              onClick={() => onRate(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}
      </HStack>
    );
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">RecipeShare</Heading>
        <HStack spacing={8}>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Recipes</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Submit a Recipe</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to RecipeShare</Heading>
        <Text fontSize="xl" mb={8}>Discover and share amazing recipes from around the world.</Text>
        <Button colorScheme="teal" size="lg" as={Link} to="/submit-recipe">Submit a Recipe</Button>
      </Box>

      {/* Featured Recipes Section */}
      <Box as="section" py={20}>
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Featured Recipes</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Recipe 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 1</Heading>
              <Text>Short description of the recipe.</Text>
              <StarRating rating={ratings.recipe1} onRate={(rating) => handleRate("recipe1", rating)} />
              <Text mt={2}>Average Rating: {ratings.recipe1}</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Recipe 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 2</Heading>
              <Text>Short description of the recipe.</Text>
              <StarRating rating={ratings.recipe2} onRate={(rating) => handleRate("recipe2", rating)} />
              <Text mt={2}>Average Rating: {ratings.recipe2}</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Recipe 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 3</Heading>
              <Text>Short description of the recipe.</Text>
              <StarRating rating={ratings.recipe3} onRate={(rating) => handleRate("recipe3", rating)} />
              <Text mt={2}>Average Rating: {ratings.recipe3}</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Flex justifyContent="space-between" alignItems="center" px={10}>
          <Text>&copy; 2023 RecipeShare. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#" isExternal><FaFacebook size="24px" /></Link>
            <Link href="#" isExternal><FaTwitter size="24px" /></Link>
            <Link href="#" isExternal><FaInstagram size="24px" /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;