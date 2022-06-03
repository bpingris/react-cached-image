import { useEffect, useMemo, useState } from "react";

type Props = {
  src: string;
  keyCache: string;
};

const CachedImage = ({ src, keyCache }: Props) => {
  const [imageSrc, setImageSrc] = useState("");

  const formattedKeyCached = useMemo(
    () => `__CachedImage-${keyCache}`,
    [keyCache]
  );

  useEffect(() => {
    const cachedImg = localStorage.getItem(formattedKeyCached);

    if (!cachedImg) {
      let tmpImg = document.createElement("img");
      tmpImg.src = src;
      tmpImg.crossOrigin = "anonymous";
      tmpImg.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = tmpImg.width;
        canvas.height = tmpImg.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          console.error("cannot get canvas's context");
          return;
        }
        ctx.drawImage(tmpImg, 0, 0);
        let dataUrl = canvas.toDataURL("image/png");
        localStorage.setItem(formattedKeyCached, dataUrl);
        setImageSrc(dataUrl);
      };
    } else {
      setImageSrc(cachedImg);
    }
  }, []);

  return <img src={imageSrc} />;
};

export default CachedImage;
