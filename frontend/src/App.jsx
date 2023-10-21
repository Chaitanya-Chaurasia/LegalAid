import Banner from './Banner.jsx'
import { Box } from '@chakra-ui/react'
import Body from './Body.jsx'
function App() {
  return (
    <Box backgroundColor={"#F0F0F0"} h={'100vh'} minWidth={'1200px'}>
      <Banner />
      <Body />
    </Box>
  )
}

export default App
