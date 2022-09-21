function Container(props) {
  const children = props.children;

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "0 24px",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
