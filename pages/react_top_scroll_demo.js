import TopScroll from "react_top_scroll";

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
      <TopScroll />
    </div>
  );
}

export default ReactTopScrollDemo;
