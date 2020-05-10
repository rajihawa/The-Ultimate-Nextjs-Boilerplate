import React from "react";

interface ImageProps {
  path: string;
  fallType: string;
  alt: string;
  className?: string;
}
const Image: React.FC<ImageProps> = ({ fallType, path, alt, className }) => {
  return (
    <picture>
      <source srcSet={path + ".webp"} type={"image/" + fallType} />
      <source srcSet={path + "." + fallType} type={"image/" + fallType} />
      <img className={className} srcSet={path + "." + fallType} alt={alt} />
    </picture>
  );
};

export default Image;
