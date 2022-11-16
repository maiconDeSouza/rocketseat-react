import { useState } from 'react'
import { CountdownContainer, Separator } from './Countdown.styles'
export function Countdown(){
  const [amountSecoondsPassesd, setAmountSecoondsPassesd] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmout * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecoondsPassesd : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmout = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmout).padStart(2, '0')

  useEffect(() => {
    let clear: number
    if (activeCycle) {
      clear = setInterval(() => {
        const differenceSeconds = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (differenceSeconds >= totalSeconds) {
          setCycles(
            cycles.map((cycle) => {
              if (cycle.id === activeCycleID) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )
          setAmountSecoondsPassesd(totalSeconds)
          clearInterval(clear)
        } else {
          setAmountSecoondsPassesd(differenceSeconds)
        }
      }, 1000)

      return () => {
        clearInterval(clear)
        setAmountSecoondsPassesd(0)
      }
    }
  }, [activeCycle, totalSeconds, activeCycleID, cycles])
    return (
        <CountdownwnContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separatorarator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>
    )
}