import { useRef } from 'react';

// Enables click-and-drag horizontal scrolling on a ref'd container (desktop mouse users);
// touch devices already get native scroll. Returns handlers + a ref to spread onto the track.
export default function useDragScroll() {
  const trackRef = useRef(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false });

  const onMouseDown = (e) => {
    const track = trackRef.current;
    dragState.current = {
      isDown: true,
      startX: e.pageX - track.offsetLeft,
      scrollLeft: track.scrollLeft,
      moved: false
    };
    track.classList.add('dragging');
  };

  const onMouseMove = (e) => {
    if (!dragState.current.isDown) return;
    e.preventDefault();
    const track = trackRef.current;
    const x = e.pageX - track.offsetLeft;
    const walk = x - dragState.current.startX;
    if (Math.abs(walk) > 5) dragState.current.moved = true;
    track.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const endDrag = () => {
    dragState.current.isDown = false;
    trackRef.current?.classList.remove('dragging');
  };

  const onClickCapture = (e) => {
    if (dragState.current.moved) e.preventDefault();
  };

  return {
    trackRef,
    dragHandlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp: endDrag,
      onMouseLeave: endDrag
    },
    onClickCapture
  };
}
