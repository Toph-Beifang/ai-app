import type React from "react";
import styles from "../page.module.css";

interface InputAreaProps {
  name: string;
  setName: (name: string) => void;
  currentExperience: string;
  setCurrentExperience: (experience: string) => void;
  onAIGenerate: () => void;
}

const InputArea: React.FC<InputAreaProps> = ({
  name,
  setName,
  currentExperience,
  setCurrentExperience,
  onAIGenerate,
}) => {
  return (
    <div className={styles.inputArea}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className={styles.input}
      />
      <textarea
        value={currentExperience}
        onChange={(e) => setCurrentExperience(e.target.value)}
        placeholder="Enter your experience"
        className={styles.textarea}
      />
      <button onClick={onAIGenerate} className={styles.button}>
        Generate with AI
      </button>
    </div>
  );
};

export default InputArea;
