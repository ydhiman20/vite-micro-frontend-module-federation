import { Suspense, lazy } from "react";

// Lazy load micro-frontend components
const SiteOne = lazy(() => import("siteone/App"));
const SiteTwo = lazy(() => import("sitetwo/App"));

function App() {
  return (
    <div className="app flex flex-col h-screen w-screen">
      {/* Top Section */}
      <header className="app-header flex justify-center items-center p-4 bg-gray-100 border-b">
        <h1>Micro-Frontend Demo</h1>
      </header>

      {/* Main Content */}
      <main className="app-content flex flex-1 p-4 gap-4">
        {/* Left Section */}
        <section className="micro-frontend flex-1 p-4 border rounded-lg bg-white">
          <Suspense fallback={<div>Loading Module P1...</div>}>
            <SiteOne />
          </Suspense>
        </section>

        {/* Right Section */}
        <section className="micro-frontend flex-1 p-4 border rounded-lg bg-white">
          <Suspense fallback={<div>Loading Module P2...</div>}>
            <SiteTwo />
          </Suspense>
        </section>
      </main>
    </div>
  );
}

export default App;
