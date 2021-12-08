import { 
  Flex,
  Stack, 
  Heading,
  Divider
} from '@chakra-ui/react'
import { useState } from 'react'

import { Item } from './components/Item'
import { AddItemInput } from './components/AddItemInput'
import { Footer } from './components/Footer'

export function App() {
  const [items, setItems] = useState<string[]>([])

  function addItemToList(title: string) {
    setItems([...items, `Item ${items.length} - ${title}`])
  }

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

          <AddItemInput addItemToList={addItemToList} />

          <Stack as="section" spacing="10" py="4" px="10">
            {items.map(item => (
              <Item key={item} title={item} />
            ))}
          </Stack>
        </Stack>
      </Flex>

      <Footer />
    </Flex>
  )
}
