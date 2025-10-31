import React from "react";
import { motion } from "framer-motion";

interface IconMenuProps {
  rotate: boolean;
  setRotate: React.Dispatch<React.SetStateAction<boolean>>;
  ShowElement: boolean;
  setShowElement: React.Dispatch<React.SetStateAction<boolean>>;
  finishedLoading: boolean;
}

const IconMenu: React.FC<IconMenuProps> = (props) => {
  const handleClick = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };

  return (
    <div
      className="md:hidden text-white space-y-2 left-0 hover:cursor-pointer mt-2"
      onClick={handleClick}
    >
      {/* Thanh trên */}
      <div className="flex justify-end">
        <motion.div
          animate={props.rotate ? { y: 10, rotate: 45 } : { y: 0, rotate: 0 }}
          transition={
            props.rotate
              ? { y: { duration: 0.15 }, rotate: { delay: 0.2 } }
              : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
          }
          className="w-8 h-0.5 rounded bg-AAsecondary"
        />
      </div>

      {/* Thanh giữa */}
      <motion.div
        animate={props.rotate ? { opacity: 0 } : { opacity: 1 }}
        transition={{ opacity: { duration: 0 } }}
        className="flex justify-end"
      >
        <div className="w-6 h-0.5 rounded bg-AAsecondary" />
      </motion.div>

      {/* Thanh dưới */}
      <div className="flex justify-end">
        <motion.div
          animate={
            props.rotate
              ? { y: -10, width: "150%", rotate: -45 }
              : { y: 0, width: "50%", rotate: 0 }
          }
          transition={
            props.rotate
              ? { y: { duration: 0.15 }, rotate: { delay: 0.2 } }
              : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
          }
          className="w-4 h-0.5 rounded bg-AAsecondary"
        />
      </div>
    </div>
  );
};

export default IconMenu;
