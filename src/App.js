import ExampleUseLayoutEffect from "./examples/ExampleUseLayoutEffect/ExampleUseLayoutEffect";
import ExampleUseSyncExternalStore from "./examples/ExampleUseSyncExternalStore/ExampleUseSyncExternalStore";
import ExampleSuspense from "./examples/ExampleSuspense/ExampleSuspense";
import ExampleUseTransition from "./examples/ExampleUseTransition/ExampleUseTransition";
import ExampleUseOptimistic from "./examples/ExampleUseOptimistic/ExampleUseOptimistic";
import ListBoxItem from "./components/ListBox/ListBoxItem";
import {useState} from "react";
import ListBox from "./components/ListBox/ListBox";
import ExampleUseActionState from "./examples/ExampleUseActionState/ExampleUseActionState";
import ExampleUseCallBack from "./examples/ExampleUseCallBack/ExampleUseCallBack";
import ExampleUseDebugValue from "./examples/ExampleUseDebugValue/ExampleUseDebugValue";
import ExampleUseDeferredValue from "./examples/ExampleUseDeferredValue/ExampleUseDeferredValue";
import ExampleUseReducer from "./examples/ExampleUseReducer/ExampleUseReducer";


function App() {
    const [items, setItems] = useState(["qwe", "asd", "zxc"]);
  return (
    <div className="App">
      {/*<ExampleUseLayoutEffect/>*/}
      {/*  <ExampleUseSyncExternalStore/>*/}
        {/*<ExampleSuspense/>*/}
        {/*<ExampleUseTransition/>*/}
        {/*<ExampleUseOptimistic/>*/}
        {/*<ListBox items={items}
                 selectMode="Multiple"
                 render={(item, index) => {
                     return (
                         <div style={{ display: "flex", justifyContent: "space-between" }}>
                             <div>{item}</div>
                             <button onClick={
                                 () => setItems(items.filter((item, i) => i !== index))}>
                                 Удалить
                             </button>
                         </div>
                     )
                 }}/>*/}
        {/*<ExampleUseActionState/>*/}
        {/*<ExampleUseCallBack/>*/}
        {/*<ExampleUseDebugValue/>*/}
        {/*<ExampleUseDeferredValue/>*/}
        {/*<ExampleUseReducer/>*/}
    </div>
  );
}

export default App;
