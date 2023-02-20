import React, { useState, useEffect, useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import Icon from "../Icon/Icon";
import '../../styles/Slideshow.css';

const Slideshow = ({
  totalItems,
  children,
  widthItem,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDots, setShowDots] = useState(true);
  const [showArrows, setShowArrows] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(1);
  const [transform, setTransform] = useState(
    `translateX(-${activeIndex * (100 / itemsToShow)}%)`
  );

  const width = useWindowWidth();

  const indicators = useMemo(() => {
    return Array.from(Array(totalItems).keys());
  }, [itemsToShow, totalItems, width]);

  /* istanbul ignore next */
  const updateIndex = (newIndex) => {
    if (newIndex < 0 || newIndex > totalItems) {
      newIndex = totalItems - itemsToShow;
      if (newIndex < 0) {
        newIndex = 0;
      }
    } else if (newIndex === totalItems - itemsToShow + 1) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  /* istanbul ignore next */
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  /* istanbul ignore next */
  const leftClick = () => {
    if (window?.getSelection) {
      window?.getSelection()?.removeAllRanges();
    }
    updateIndex(activeIndex - 1);
  };

  /* istanbul ignore next */
  const rightClick = () => {
    if (window?.getSelection) {
      window?.getSelection()?.removeAllRanges();
    }
    updateIndex(activeIndex + 1);
  };

  // for carousel settings
  useEffect(() => {
    setItemsToShow(itemsToShow || 1);
    setShowDots(showDots || false);
    setShowArrows(showArrows || false);
  }, [width]);

  useEffect(() => {
    if (widthItem) {
      setTransform(`translateX(-${activeIndex * widthItem}px)`);
    } else {
      setTransform(`translateX(-${activeIndex * (100 / itemsToShow)}%)`);
    }
  }, [activeIndex, widthItem, itemsToShow]);

  return (
    <div className="slideshow-container" {...props} {...handlers}>
      <div className="slidesToShow-container">
        {showArrows && itemsToShow < totalItems && (
          <div className="icon-left"><Icon name="iconArrowBack" onClick={() => leftClick()} /></div>
        )}
        <div className="slideshow-inner" style={{ transform: transform }}>
          {children}
        </div>
        {showArrows && itemsToShow < totalItems && (
          <div className="icon-right"><Icon name="iconArrowForward" onClick={() => rightClick()} /></div>
        )}
      </div>

      {showDots && (
        <div className="slideshow-indicators">
          {indicators
            .filter(
              (_elements, index) =>
                index <= totalItems - itemsToShow
            )
            .map((_item, i) => (
              <div className="indicator" key={i} onClick={() => updateIndex(i)} style={{backgroundColor: activeIndex === i? 'white' : 'transparent'}}></div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Slideshow;

