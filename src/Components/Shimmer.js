import { ShimmerPostItem } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap  justify-between gap-[30px]">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="w-[250px]">
          <ShimmerPostItem imageHeight={160} card title cta />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
