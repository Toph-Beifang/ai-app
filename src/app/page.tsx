"use client";

import { useState } from "react";
import styles from "./page.module.css";
import InputArea from "./components/InputArea";
import ProfilePreview from "./components/ProfilePreview";

export default function Home() {
  const [name, setName] = useState("");
  const [experiences, setExperiences] = useState<string[]>([]);
  const [currentExperience, setCurrentExperience] = useState("");

  const handleAIGenerate = async () => {
    if (!currentExperience.trim()) {
      alert("Please enter some experience text to enhance");
      return;
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: `Enhance this professional experience to sound more professional and impactful while maintaining the same core information: "${currentExperience}"`,
        }),
      });
      const data = await response.json();
      if (data.output) {
        setExperiences([...experiences, data.output]);
        setCurrentExperience(""); // Clear the text field after generating
      }
    } catch (error) {
      console.error("Error generating experience:", error);
    }
  };

  const handleDeleteExperience = (indexToDelete: number) => {
    setExperiences(experiences.filter((_, index) => index !== indexToDelete));
  };

  const handleExperienceClick = (exp: string) => {
    setCurrentExperience(exp); // Copy the experience text to the text field when clicked
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.editor}>
          <InputArea
            name={name}
            setName={setName}
            currentExperience={currentExperience}
            setCurrentExperience={setCurrentExperience}
            onAIGenerate={handleAIGenerate}
          />
          <ProfilePreview
            name={name}
            experiences={experiences}
            onExperienceClick={handleExperienceClick}
            onDeleteExperience={handleDeleteExperience}
          />
        </div>
      </main>
    </div>
  );
}
