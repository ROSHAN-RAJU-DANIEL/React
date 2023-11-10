import React, { useEffect } from 'react';
import NoteDisplay from './components/NoteDisplay';
import Sidebar from './components/Sidebar';
import LeftSidebar from './components/LeftSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from './redux/actions';


function App() {
  const dispatch = useDispatch();
  const showFavorites = useSelector((state) => state.notes.showFavorites);

  useEffect(() => {
    dispatch(fetchNotes(showFavorites));
  }, [showFavorites, dispatch]);

  return (
    <div className="flex gap-30">
      <LeftSidebar />
      <Sidebar />
      <NoteDisplay />
    </div>
  );
}

export default App;
