import React from 'react'
import { useRouter } from 'next/router'
 const CoffeStore = () => {
    const Router=useRouter()
  return (
    <div>CoffeStore {Router.query.id}</div>
  )
}
export default CoffeStore