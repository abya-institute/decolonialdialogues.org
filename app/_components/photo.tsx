import Image from "next/image";
import { imageMeta, type ImagePath } from "@/data/image-meta";

type PhotoProps = {
  src: ImagePath;
  alt: string;
  /**
   * Wrapper classes. The caller owns positioning and aspect ratio — pass
   * "relative aspect-[4/3]" for a block, or "absolute inset-0" to fill a
   * positioned parent.
   */
  className: string;
  sizes: string;
  priority?: boolean;
  /** Applied to the <img> itself, e.g. a one-off object-position. */
  imgClassName?: string;
};

/**
 * Every local image carries generated intrinsic dimensions and a blur
 * placeholder (see scripts/optimize-images.mjs), so nothing on this page ever
 * reflows or flashes while a photograph loads.
 */
export function Photo({
  src,
  alt,
  className,
  sizes,
  priority = false,
  imgClassName = "",
}: PhotoProps) {
  const meta = imageMeta[src];
  return (
    <div className={`overflow-hidden bg-clay-sunk ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={meta.blurDataURL}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
