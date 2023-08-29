import ReactLoading from "react-loading";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <ReactLoading
      type="spinningBubbles"
      color="#0000FF"
      height={100}
      width={50}
    />
  );
}
