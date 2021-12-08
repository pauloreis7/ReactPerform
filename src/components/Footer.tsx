import { 
  Flex, 
} from '@chakra-ui/react'
import { memo } from 'react'

function FooterComponent() {
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

export const Footer = memo(FooterComponent)