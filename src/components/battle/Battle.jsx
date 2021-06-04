import { useState, useEffect } from 'react'
import BattleInfo from './BattleInfo'

const Battle = () => {

  const [hamster1, setHamster1] = useState(null)
  const [hamster2, setHamster2] = useState(null)

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    const response1 = await fetch('/api/hamsters/random');
    const data1 = await response1.json()

    const response2 = await fetch('/api/hamsters/random');
    const data2 = await response2.json()

    console.log(data1)
    console.log(data2)

    setHamster1(data1);
    setHamster2(data2);

  }

  let showBattleData = false
  if (hamster1 != null && hamster2 != null) {
    showBattleData = true
  }

  return (
    <div>

      {showBattleData ?
        <div>
          <BattleInfo hamster1={hamster1} hamster2={hamster2} fetchData={fetchData} />

        </div>
        :
        <p>"Battle data not found"</p>
      }

    </div>
  )

}

export default Battle;