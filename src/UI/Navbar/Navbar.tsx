import { useContext } from 'react';
import AppContext from '../../store/AppContext/app-context';

function Navbar() {
  const { editMode, setEditMode, setModalOpen, updateModalType } = useContext(AppContext);

  const handleOpenClick = () => {
    updateModalType('form');
    setModalOpen(true);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  return (
    <div className="flex justify-center z-10">
      {/* Top Nav */}
      <div className="w-[900px]">
        <div className="flex items-center mx-2 justify-between tablet:mx-4  max:mx-0">
          <div>
            <p className="py-3 font-bold normal-case text-xl text-center tablet:text-left ">
              StreakTracker
            </p>
          </div>
          <div className="">
            {!editMode && (
              <button
                className="btn btn-ghost text-success"
                type="button"
                onClick={handleOpenClick}>
                Add
              </button>
            )}
            {editMode ? (
              <button
                className="btn btn-ghost text-error"
                type="button"
                onClick={handleCancelClick}>
                Cancel
              </button>
            ) : (
              <button
                className="btn btn-ghost text-warning"
                type="button"
                onClick={handleEditClick}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
