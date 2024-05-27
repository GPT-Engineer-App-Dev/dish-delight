import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea, VStack, Image, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SubmitRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Recipe submitted.",
      description: "Your recipe has been submitted successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/");
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>Submit a Recipe</Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="recipe-name" isRequired>
            <FormLabel>Recipe Name</FormLabel>
            <Input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            />
          </FormControl>
          <FormControl id="ingredients" isRequired>
            <FormLabel>Ingredients</FormLabel>
            <Textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </FormControl>
          <FormControl id="instructions" isRequired>
            <FormLabel>Instructions</FormLabel>
            <Textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </FormControl>
          <FormControl id="image">
            <FormLabel>Upload Image</FormLabel>
            <Input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <Image src={image} alt="Recipe Image" mt={4} />}
          </FormControl>
          <Button colorScheme="teal" size="lg" type="submit" width="full">Submit</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default SubmitRecipe;