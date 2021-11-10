import dynamic from "next/dynamic";
const TopScrollNoSSR = dynamic(import("react_top_scroll"), {
  ssr: false,
});

function ReactTopScrollDemo() {
  return (
    <div style={{ height: "4000px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          fontWeight: "700",
          fontSize: "40px",
        }}
      >
        Scroll page down, please.
      </div>
      <TopScrollNoSSR />
    </div>
  );
}

export default ReactTopScrollDemo;
