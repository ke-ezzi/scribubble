import { Center } from "@react-three/drei"

export function Underlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 40,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pointerEvents: "none",
      }}>
      <div style={{ width: "100%", padding: 8, display: "inline-flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <p
          style={{
            fontFamily: "'love",
            flex: "1 1 0%",
            height: 30,
            fontSize: 30,
            fontWeight: "700",
            lineHeight: "30px",
            color: "black",
            letterSpacing: -2,
          }}>
          Scribubble
        </p>
        <div style={{ flex: "1 1 0", display: "flex", gap: "6em" }}>
        <p>Work</p>
        <p>Event</p>
        <p>Page</p>
        <p>About</p>
        <p>Start Scribubble</p>
        </div>
      </div>
    </div>
  )
}

export function Overlay() {
  return (
    <div style={{ position: "absolute",left: 200, bottom: 250, textAlign: "center"}}>
      <p style={{ flex: "1 1 0%", fontSize: 40, lineHeight: "1em", textAlign: "right", color: "black", width: "80%"}}>
        <p
          className="full"
          style={{
            fontFamily: "'Love",
            flex: "1 1 0%",
            fontSize: 100,
            fontWeight: "400",
            lineHeight: "1em",
            textAlign: "center",
            color: "black",
            // letterSpacing: -0.5,
            // whiteSpace: "nowrap",
          }}>
          Your scribbling can be an expression
        </p>
      </p>
    </div>
  )
}
