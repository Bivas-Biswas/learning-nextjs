import styled from 'styled-components'

const Tittle = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};
`

function CssInJs() {
    return (
        <>
            <Tittle>Styled Components</Tittle>
            <h2 style={{ color: 'red' }}>Hello World</h2>
        </>
    )
}

export default CssInJs