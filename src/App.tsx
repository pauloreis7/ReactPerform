import { 
  Flex,
  Stack, 
  Heading,
  Divider
} from '@chakra-ui/react'
import { useState, useCallback, useMemo } from 'react'

import { Item } from './components/Item'
import { AddItemInput } from './components/AddItemInput'
import { CountItemsWithOne } from './components/CountItemsWithOne'
import { Footer } from './components/Footer'

import { 
  MotionFlex,
  MotionStack,
  containerAnimation,
  fadeInUpForms
} from './animations/GlobalAnimations'

export function App() {
  const [items, setItems] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const addItemToList = useCallback((title: string) => {
    if(title === '') {
      return setError('Provide a title to the item')
    }

    const checkItemExists = items.find(item => item === title)

    if(checkItemExists) {
      return setError(`Item "${checkItemExists}" already exists`)
    }

    setItems(state => [...state, title])
    setError(null)
  }, [items])

  const countItemsWithOne = useMemo(() => {
    return {
      count: items.filter((_, i) => String(i + 1).includes('1')).length
    }
  }, [items])

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
      <MotionFlex
        as="main"
        width="100%"
        maxWidth={720}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        variants={containerAnimation}
        initial="initial"
        animate="animate"
      >
        <MotionStack spacing="6" variants={fadeInUpForms}>
          <Heading as="h1" size="lg" textAlign="center">
            Manage your items
          </Heading>

          <Divider borderColor="gray.700" />

          <AddItemInput addItemToList={addItemToList} error={error} />

          <Stack as="section" spacing="10" py="4" px="10">
            {items.map((item, i) => (
              <Item 
                key={item} 
                title={item} 
                itemNumber={i + 1} 
                index={i} 
              />
            ))}
          </Stack>
        </MotionStack>

        <CountItemsWithOne countItemsWithOne={countItemsWithOne}  />
      </MotionFlex>

      <Footer />
    </Flex>
  )
}
