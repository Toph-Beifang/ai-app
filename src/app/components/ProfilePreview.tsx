import type React from "react";
import styles from "../page.module.css";

interface ProfilePreviewProps {
  name: string;
  experiences: string[];
  onExperienceClick: (experience: string) => void;
  onDeleteExperience: (index: number) => void;
}

const ProfilePreview: React.FC<ProfilePreviewProps> = ({
  name,
  experiences,
  onExperienceClick,
  onDeleteExperience,
}) => {
  return (
    <div className={styles.profilePreview}>
      <h2>{name || "Your Name"}</h2>
      <h3>Experiences:</h3>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index} className={styles.experienceItem}>
            <div onClick={() => onExperienceClick(exp)}>{exp}</div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDeleteExperience(index);
              }}
              className={styles.deleteButton}
              aria-label="Delete experience"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePreview;
