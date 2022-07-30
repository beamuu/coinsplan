import { Container, ContainerProps } from "@chakra-ui/react"
import { FC } from "react"


const ContentContainer: FC<ContainerProps> = (props) => {
  return (
    <Container maxW="container.xl" px={{sm: 4, md: 10, lg: 12} } {...props}>
      { props.children }
    </Container>
  )
}

export default ContentContainer