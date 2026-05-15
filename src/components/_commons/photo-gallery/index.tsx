import {PropsWithChildren, useCallback, useMemo} from "react";

const MAX_IMAGES_WITHOUT_HIDDEN = 4;

export interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery = (props: PropsWithChildren<PhotoGalleryProps>) => {
  const {photos} = props;

  const photoCount = useMemo(() => photos.length, [photos]);
  const lastIndex = useMemo(() => MAX_IMAGES_WITHOUT_HIDDEN - 1, []);
  const moreCount = useMemo(() => photoCount - MAX_IMAGES_WITHOUT_HIDDEN, [photoCount]);
  const gridPhotos = useMemo(() => photos.slice(0, MAX_IMAGES_WITHOUT_HIDDEN), [photos]);

  const onClick = useCallback((index: number) => {
    //
  }, []);

  return (
    <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
      {gridPhotos.map((image, index) => {
        return (
          <button key={`${image}-${index}`} onClick={() => onClick(index)}
                  className="relative block aspect-[519/358] bg-gray-pale"
                  style={{background: `url(${image}) no-repeat center/cover`}}>
            {photoCount <= MAX_IMAGES_WITHOUT_HIDDEN || index < lastIndex ? null : (
              <div className="absolute left-0 top-0 w-full h-full bg-black-a50 gap-y-4 flex flex-col justify-center items-center">
                <span className="text-white text-base">See more</span>
                <span className="text-6hxl text-cta-primary">+{moreCount}</span>
                <span className="text-white text-base">Photos</span>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default PhotoGallery;
