import { 
  Flex,
  Text,
  Button,
  Icon,
  IconButton,
  useBreakpointValue, 
} from '@chakra-ui/react'
import { useState, memo } from 'react'
import { FiShoppingBag } from 'react-icons/fi'

import { MotionFlex, dropList } from '../animations/GlobalAnimations'

type ItemProps = {
  title: string;
  itemNumber: number;
  index: number;
}

function ItemComponent({ title, itemNumber, index }: ItemProps) {
  const [quantity, setQuantity] = useState<number>(0)

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <MotionFlex 
      align="center" 
      justify="space-between"
      variants={dropList}
      custom={index}
    >
      <Text fontSize="md" fontWeight="600">
        Item {itemNumber} - {title} / {quantity}
      </Text>

      { isWideVersion ? (
        <Button
          colorScheme="green"
          size="sm"
          cursor="pointer"
          leftIcon={<Icon as={FiShoppingBag} fontSize="18" />}
          onClick={() => setQuantity(state => state + 1)}
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
          onClick={() => setQuantity(state => state + 1)}
        />
      ) }
    </MotionFlex>
  )
}

export const Item = memo(ItemComponent)