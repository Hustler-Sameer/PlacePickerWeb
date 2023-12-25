import { useEffect, useState } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(3000);
  // we are doing this to show progress bar
  useEffect(() => {
    const interval =setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    }
  }, []);

  // setTimeout(() => {
  //   onConfirm();
  // }, 3000)
  // // this will delete the photo as we are givivng confimation evvery 3 seconds and hence the item get deleted even after c
  // // hence we will use useEffect function to stop timer

  useEffect(() => {
    const Timer = setTimeout(() => {
      onConfirm();
    }, 3000);
    return () => {
      console.log("Cleaning up timer");
      clearTimeout(Timer);
    };
  }, [onConfirm]);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={3000} />
    </div>
  );
}
