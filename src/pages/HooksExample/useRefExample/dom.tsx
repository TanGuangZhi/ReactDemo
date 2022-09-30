import React, { useRef } from 'react'

export default function dom() {
  const inputEl = useRef(null) as any
  const onButtonClick = () => {
    // current 属性指向了真实的 input 这个 DOM 节点，从而可以调用 focus 方法
    inputEl.current.focus()
  }
  return (
    <main className="w-full h-full">
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </main>
  )
}
