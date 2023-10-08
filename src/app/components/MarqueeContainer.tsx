import styled from "styled-components"

interface MarqueeContainerProps {
  isPaused: boolean
}

const MarqueeContainer = styled.div<MarqueeContainerProps>`
  animation-play-state: ${({ isPaused }) => (isPaused ? "paused" : "running")};
`

export default MarqueeContainer
