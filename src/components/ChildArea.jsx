import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "pink",
};

export const ChildArea = memo((props) => {
  const { open, onClose } = props;

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
