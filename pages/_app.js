import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}> // redux provider wraps the entire app to provide access to the store
      <Component {...pageProps} />
    </Provider>
  );
}
