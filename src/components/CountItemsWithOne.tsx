import { 
  Flex,
  Text
} from '@chakra-ui/react'

type CountItemsWithOneProps = {
  countItemsWithOne: {
    count: number
  }
}

export function CountItemsWithOne({ countItemsWithOne }: CountItemsWithOneProps) {
  return (
    <Flex 
      w="100%"
      h="3rem"
      mt="3"
      justify="center"
      align="center"
    >
      <Text display="flex" fontSize="lg">
        Items number with one: 
        <Text
          ml="2"
          fontWeight="600" 
          color="green.500"
        >
          {countItemsWithOne.count}
        </Text>
      </Text>
    </Flex>
  )
}