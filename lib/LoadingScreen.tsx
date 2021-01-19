import * as React from "react";

/**
  Display a loading screen while ractive-player is not-ready.
*/
export default function LoadingScreen() {
  return (
    <div className="rp-loading-screen">
      <div className="rp-loading-spinner"/>
    </div>
  );
}
