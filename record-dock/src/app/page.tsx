"use client";
import Image from 'next/image';
import {useState} from 'react';
import Record from './record';

export default function Home() {
  const [file, setFile] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Record OBS Dock
      </h1>
      <Record />
    </main>
  )
}
