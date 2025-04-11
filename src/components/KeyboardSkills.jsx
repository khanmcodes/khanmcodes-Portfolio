import { useState, useEffect } from 'react';
import React from 'react';
import { FaHtml5, FaReact, FaNodeJs, FaGithub, FaPython, FaJava } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiTailwindcss, SiC, SiFigma } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbBrandNextjs } from 'react-icons/tb';

const KeyboardSkills = () => {
  const [activeKey, setActiveKey] = useState(null);

  // Define keyboard layout with skill icons
  const keyboardLayout = [
    // Row 1
    [
      { key: 'Escape', display: 'esc', size: 'normal' },
      { key: '1', display: '1', size: 'normal' },
      { key: '2', display: '2', size: 'normal' },
      { key: '3', display: '3', size: 'normal' },
      { key: '4', display: '4', size: 'normal' },
      { key: '5', display: '5', size: 'normal' },
      { key: '6', display: '6', size: 'normal' },
      { key: '7', display: '7', size: 'normal' },
      { key: '8', display: '8', size: 'normal' },
      { key: '9', display: '9', size: 'normal' },
      { key: '0', display: '0', size: 'normal' },
      { key: '-', display: '-_', size: 'normal' },
      { key: '=', display: '=+', size: 'normal' },
      { key: 'Backspace', display: '←', size: 'largest' },
    ],
    // Row 2
    [
      { key: 'Tab', display: 'tab', size: 'medium' },
      { key: 'q', display: 'Q', size: 'normal' },
      { key: 'w', display: 'W', size: 'normal' },
      { key: 'e', display: 'E', size: 'normal' },
      { key: 'r', display: <FaReact size={10} color="#61DAFB" />, skill: 'React & React Native', size: 'normal' },
      { key: 't', display: <SiTailwindcss size={10} color="#06b6d4" />, skill: 'Tailwind & NativeWind', size: 'normal' },
      { key: 'y', display: 'Y', size: 'normal' },
      { key: 'u', display: <FaJava size={10} color="#f89820" />, skill: 'Java', size: 'normal' },
      { key: 'i', display: 'I', size: 'normal' },
      { key: 'o', display: 'O', size: 'normal' },
      { key: 'p', display: <FaPython size={10} color="#3776AB" />, skill: 'Python', size: 'normal' },
      { key: '[', display: '[{', size: 'normal' },
      { key: ']', display: ']}', size: 'normal' },
      { key: '\\', display: '\\|', size: 'medium' },
    ],
    // Row 3
    [
      { key: 'CapsLock', display: 'caps', size: 'large' },
      { key: 'a', display: 'A', size: 'normal' },
      { key: 's', display: <SiCss3 size={10} color="#1572B6" />, skill: 'CSS', size: 'normal' },
      { key: 'd', display: 'D', size: 'normal' },
      { key: 'f', display: <SiFigma size={10} color="#F24E1E" />, skill: 'Figma', size: 'normal' },
      { key: 'g', display: <FaGithub size={10} color="#ffffff" />, skill: 'GitHub', size: 'normal' },
      { key: 'h', display: <FaHtml5 size={10} color="#E34F26" />, skill: 'HTML', size: 'normal' },
      { key: 'j', display: <SiJavascript size={10} color="#F7DF1E" />, skill: 'JavaScript', size: 'normal' },
      { key: 'k', display: 'K', size: 'normal' },
      { key: 'l', display: 'L', size: 'normal' },
      { key: ';', display: ';:', size: 'normal' },
      { key: "'", display: "'\"", size: 'normal' },
      { key: 'Enter', display: 'enter', size: 'largest' },
    ],
    // Row 4
    [
      { key: 'ShiftLeft', display: 'shift', size: 'largest' },
      { key: 'z', display: <TbBrandNextjs size={10} color="#ffffff" />, skill: 'Next.js', size: 'normal' },
      { key: 'x', display: 'X', size: 'normal' },
      { key: 'c', display: <SiC size={10} color="#A8B9CC" />, skill: 'C/C++', size: 'normal' },
      { key: 'v', display: <BiLogoVisualStudio size={10} color="#007ACC" />, skill: 'VS Code', size: 'normal' },
      { key: 'b', display: 'B', size: 'normal' },
      { key: 'n', display: <FaNodeJs size={10} color="#339933" />, skill: 'Node.js', size: 'normal' },
      { key: 'm', display: 'M', size: 'normal' },
      { key: ',', display: ',<', size: 'normal' },
      { key: '.', display: '.>', size: 'normal' },
      { key: 'ShiftRight', display: 'shift', size: 'large' },
      { key: 'ArrowUp', display: '↑', size: 'normal' },
      { key: 'ArrowUp', display: '', size: 'normal' },
    ],
    // Row 5
    [
      { key: 'ControlLeft', display: 'ctrl', size: 'ctrl' },
      { key: 'MetaLeft', display: 'win', size: 'ctrl' },
      { key: 'AltLeft', display: 'alt', size: 'ctrl' },
      { key: ' ', display: '', size: 'space' },
      { key: 'AltRight', display: 'alt', size: 'normal' },
      { key: 'Fn', display: 'fn', size: 'normal' },
      { key: 'ArrowLeft', display: '←', size: 'normal' },
      { key: 'ArrowDown', display: '↓', size: 'normal' },
      { key: 'ArrowRight', display: '→', size: 'normal' },
    ],
  ];

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      setActiveKey(e.key.toLowerCase() === ' ' ? ' ' : e.code);
      setTimeout(() => setActiveKey(null), 300);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Handle click event on keys
  const handleClick = (key) => {
    setActiveKey(key);
    setTimeout(() => setActiveKey(null), 300);
  };

  // Determine size classes for each key
  const getSizeClass = (size) => {
    switch (size) {
      case 'medium':
        return 'w-17 sm:w-17';
        case 'ctrl':
          return 'w-16 sm:w-16';
      case 'largest':
        return 'w-24 sm:w-24';
      case 'large':
        return 'w-21 sm:w-21';
      case 'space':
        return 'w-61 sm:w-61';
      default:
        return 'w-10 sm:w-10';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 select-none font-sans">
      <div className="bg-black p-3 rounded-xs scale-90 sm:scale-120 xl:scale-200 origin-top">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1 mb-1">
            {row.map((keyObj) => (
              <div
                key={keyObj.key}
                className={`
                  ${getSizeClass(keyObj.size)} 
                  h-5
                  sm:h-10 
                  rounded-[3px]
                  sm:rounded 
                  flex 
                  items-center 
                  justify-center 
                  text-[4px]
                  sm:text-[8px] 
                  font-medium 
                  transition-colors 
                  duration-100
                  select-none
                  ${activeKey === keyObj.key ? 'bg-gray-500 text-black' : 'bg-[#1B1B1B] text-gray-300'}
                  cursor-pointer
                `}
                onClick={() => handleClick(keyObj.key)}
                title={keyObj.skill || keyObj.display}
              >
                {keyObj.display}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardSkills;