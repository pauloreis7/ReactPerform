import { 
  Flex,
  Input, 
  FormControl,
  FormLabel,
  Button,
  Icon, 
} from '@chakra-ui/react'
import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'


export function AddItemInput() {


  return (
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
  )
}