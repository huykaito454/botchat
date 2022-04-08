import { Fragment, Suspense } from "react";
import "swiper/scss";
import AppRouter from "./AppRouter";
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <AppRouter></AppRouter>
      </Suspense>
    </Fragment>
  );
}

export default App;
