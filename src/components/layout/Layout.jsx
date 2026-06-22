import { useState, useCallback } from 'react';
import LoadingScreen from '../ui/LoadingScreen';
import CustomCursor from '../ui/CustomCursor';
import Navbar from '../ui/Navbar';
import SceneWrapper from '../canvas/SceneWrapper';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  const onLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onComplete={onLoadComplete} />}
      <CustomCursor />
      <SceneWrapper />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
    </>
  );
}
