import { 
  Flex,
  Text,
  Button,
  Icon,
  IconButton,
  useBreakpointValue, 
} from '@chakra-ui/react'
import { FiShoppingBag } from 'react-icons/fi'

type ItemProps = {
  title: string;
}

export function Item({ title }: ItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex align="center" justify="space-between">
      <Text fontSize="md" fontWeight="600">
        {title}
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
  )
}