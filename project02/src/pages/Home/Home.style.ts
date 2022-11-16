import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const ContainerButton = styled.button`
  width: 100%;

  border: none;
  border-radius: 8px;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  cursor: pointer;
`
export const StartCountdownButton = styled(ContainerButton)`
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(ContainerButton)`
  background-color: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
