import { 
  Box,
  Text
} from '@chakra-ui/react'

import { 
  MotionFlex,
  fadeInUpForms
} from '../animations/GlobalAnimations'

type CountItemsWithOneProps = {
  countItemsWithOne: {
    count: number
  }
}

export function CountItemsWithOne({ countItemsWithOne }: CountItemsWithOneProps) {
  return (
    <MotionFlex 
      w="100%"
      h="3rem"
      mt="3"
      justify="center"
      align="center"
      variants={fadeInUpForms}
    >
      <Box display="flex" fontSize="lg">
        Items number with one: 
        <Text
          ml="2"
          fontWeight="600" 
          color="green.500"
        >
          {countItemsWithOne.count}
        </Text>
      </Box>
    </MotionFlex>
  )
}