import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress color="inherit" />
    </div>
  );
}

export default Loading;
