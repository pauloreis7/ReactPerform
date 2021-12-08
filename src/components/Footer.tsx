import { 
  Flex,
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
  useBreakpointValue, 
} from '@chakra-ui/react'
import { FiPlus, FiShoppingBag } from 'react-icons/fi'

export function Footer() {
  return (
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
  )
}