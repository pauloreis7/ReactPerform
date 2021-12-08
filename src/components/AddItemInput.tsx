import { 
  Flex,
  Input, 
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Icon, 
} from '@chakra-ui/react'
import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'

type AddItemInputProps = {
  addItemToList: (title: string) => void;
  error?: string | null;
}

export function AddItemInput({ addItemToList, error = null }: AddItemInputProps) {
  const [value, setValue] = useState<string>('')

  return (
    <Flex>
      <FormControl isInvalid={!!error}>
        <FormLabel
          fontWeight="400" 
          color="gray.300"
          htmlFor="item"
        >
          Type the new item 
        </FormLabel>
        
        <Flex>
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button
            colorScheme="green"
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            cursor="pointer"
            rightIcon={<Icon as={FiPlus} fontSize="18" />}
            onClick={() => addItemToList(value)}
          >
            Add
          </Button>
        </Flex>

        {!!error && (
          <FormErrorMessage>
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    </Flex>
  )
}