import { useState } from 'react'
import axios from "axios"
import {load} from '@cashfreepayments/cashfree-js'


function App() {

  let cashfree;

  let insitialzeSDK = async function () {

    cashfree = await load({
      mode: "sandbox",
    })
  }

  insitialzeSDK()

  const [orderId, setOrderId] = useState("")



  const getSessionId = async () => {
    try {
      const res = await axios.post("http://localhost:3001/currentorder")
      console.log(res);
      if (res) {
        window.open(res.data.paymentLink,'_blank')
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {

      let sessionId = await getSessionId()
      let checkoutOptions = {
        paymentSessionId : sessionId,
        redirectTarget:"_modal",
      }

      cashfree.checkout(checkoutOptions).then((res) => {
        console.log("payment initialized")

      })


    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>

      <h1>Cashfree payment getway</h1>
      <div className="card">
        <button onClick={handleClick}>
          Pay now
        </button>

      </div>

    </>
  )
}

export default App
