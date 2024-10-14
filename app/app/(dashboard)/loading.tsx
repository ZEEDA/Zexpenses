import SkeletonWrapper from "@/components/SkeletonWrapper";
import React from "react";

const loading = () => {
  return (
    <div className="container py-8">
      <SkeletonWrapper isLoading={true}>Loading...</SkeletonWrapper>
    </div>
  );
};

export default loading;
