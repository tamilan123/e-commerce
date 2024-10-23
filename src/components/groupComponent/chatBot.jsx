import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  // const [defaultPosition, setDefaultPosition] = useState({ x: 0, y: 0 });
  const dragItem = useRef(null);
  const [lastPosition, setLastPosition] = useState({});

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = 60;
    const buttonHeight = 60;
    setPosition({
      x: windowWidth - buttonWidth - 20,
      y: windowHeight - buttonHeight - 20
    });
    setLastPosition({
      x: windowWidth - buttonWidth - 20,
      y: windowHeight - buttonHeight - 20
    });
  }, []);

  const toggleChatbot = (e) => {
    if (!dragging) {
      setIsOpen((prev) => !prev);
      setDragging((drg) => !drg);
      setPosition(lastPosition);
      dragItem.current = lastPosition;
    }
  };

  const handleDragStart = (e) => {
    dragItem.current = { x: e.clientX, y: e.clientY };
    setDragging(false);
  };

  const handleDrag = (e) => {
    if (dragItem.current) {
      const dx = e.clientX - dragItem.current.x;
      const dy = e.clientY - dragItem.current.y;

      setPosition((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy
      }));

      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        setDragging(true);
      }
      dragItem.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleDragEnd = () => {
    //dragItem.current = null;
  };

  return (
    <div className={"chatbot-outer-section"} ref={dragItem}>
      <Draggable
        onStart={handleDragStart}
        onDrag={handleDrag}
        onStop={handleDragEnd}
        defaultPosition={{ x: 0, y: 0 }}
        position={{ x: 0, y: 0 }}
        bounds={"parent"}
      >
        <button
          onClick={toggleChatbot}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        >
          💬
        </button>
      </Draggable>

      <div className="chatbot-main-section">
        {isOpen && (
          <div className="chatbot-frame-struct">
            <iframe
              title="chatBot"
              src="https://bafagent.bafdemo.com/chat/share?shared_id=ragflow-I1OWI1YWIyODE4NjExZWY4YTZkMDI0Mm"
              style={{ width: "100%", height: "100%", border: "none" }}
              frameborder="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
