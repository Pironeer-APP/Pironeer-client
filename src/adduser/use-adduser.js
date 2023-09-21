import { useState } from 'react'

export default function useAdduser() {
  const [titleNum, setTitleNum] = useState(0);

  const onPressNext = () => {
    setTitleNum(titleNum + 1);
  }

  return {
    titleNum,
    setTitleNum,
    onPressNext
  }
}