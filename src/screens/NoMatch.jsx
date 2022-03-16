import { FilledButton, Flex, Text } from 'components'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <Flex align="center" justify="center" direction="column" gap="32">
            <Text size="24">Nothing to see here..</Text>
            <FilledButton as={Link} to="/">
                Go to Home Page
            </FilledButton>
        </Flex>
    )
}

export default NoMatch
