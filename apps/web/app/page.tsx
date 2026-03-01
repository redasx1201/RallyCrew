import { helloUI } from "@rallycrew/ui";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ fontSize: 24, fontWeight: 600 }}>{helloUI()}</div>
    </main>
  );
}