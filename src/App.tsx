import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";

function App() {
  const { counter_value, owner_address, contract_address, sendIncrement } = useMainContract();
  const { connected } = useTonConnect()
  return (
    <div>
      <div className="container">
        <TonConnectButton />
      </div>
      <div>
        
        <div className='Card'>
          <b>Our contract Address</b>
          <div className='Hint'>{contract_address}</div>
          {/* <b>Our contract Balance</b>
          <div className='Hint'>{contract_balance ?? "Loading..."}</div> */}
        </div>

        <div className='Card'>
          <b>Owner Address</b>
          <div>{owner_address}</div>
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>
        {connected && (
              <a
                onClick={() => {
                  sendIncrement();
                }}
              >
                Increment
              </a>
            )}
      </div>
    </div>
  );
}

export default App;
