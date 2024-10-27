import styles from './styles.module.css'; 

interface AddButtonProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const AddButton: React.FC<AddButtonProps> = ({isActive, setIsActive}) => {

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <input
        type="checkbox"
        id="addButtonInput"
        className={styles.addButtonInput}
      />
      <label
        htmlFor="addButtonInput"
        className={styles.addButton}
        onClick={handleClick}
      ></label>
    </>
  );
};

export default AddButton;