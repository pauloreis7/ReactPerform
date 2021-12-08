import { 
  Flex,
  Box,
  Stack, 
  Heading,
  Text,
  Divider, 
  Input, 
  FormControl,
  FormLabel,
  Button,
  Icon,
  IconButton,
  useBreakpointValue 
} from '@chakra-ui/react'
import { FiPlus, FiShoppingBag } from 'react-icons/fi'

export function App() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      flexDir="column"
      justify="space-between"
      align="center"
      px="10"
      pt="8"
    >
      <Flex
        as="main"
        width="100%"
        maxWidth={720}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="6">
          <Heading as="h1" size="lg" textAlign="center">
            Manage your items
          </Heading>

          <Divider borderColor="gray.700" />

          <Flex alignItems="flex-end">
            <FormControl>
              <FormLabel
                fontWeight="400" 
                color="gray.300"
                htmlFor="item"
              >
                Type the new item 
              </FormLabel>
              
              <Input 
                name="item"
                id="item"
                focusBorderColor="green.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                  bgColor: 'gray.900'
                }}
                flex={1}
                borderTopRightRadius={0}
                borderBottomRightRadius={0}
              />
            </FormControl>

            <Button
              colorScheme="green"
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
              cursor="pointer"
              rightIcon={<Icon as={FiPlus} fontSize="18" />}
            >
              Add
            </Button>
          </Flex>

          <Stack as="section" spacing="10" py="4" px="10">
            <Flex align="center" justify="space-between">
              <Text fontSize="md" fontWeight="600">
                Item 0 - 1
              </Text>

              { isWideVersion ? (
                <Button
                  colorScheme="green"
                  size="sm"
                  cursor="pointer"
                  leftIcon={<Icon as={FiShoppingBag} fontSize="18" />}
                >
                  Add to wish list
                </Button>
              ) : (
                <IconButton
                  aria-label="Add to wish list"
                  colorScheme="green"
                  size="md"
                  cursor="pointer"
                  icon={<Icon as={FiShoppingBag} fontSize="20" />}
                />
              ) }
            </Flex>
          </Stack>
        </Stack>
      </Flex>

      <Flex
        as="footer"
        w="100%"
        h="9vh"
        mt="2"
        justify="center"
        align="center"
        fontSize="sm"
        color="gray.300"
      >
        Copyright &copy; Paulo Reis. All rights reserved.
      </Flex>
    </Flex>
  )
}
