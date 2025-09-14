import {Checkbox} from '@heroui/react';
import {ChangeEvent, useState} from 'react';

export function AddToCategories() {
  const [categories, setCategories] = useState({
    pinned: false,
    recentlyUsed: false,
    all: true,
    image: false,
    text: false,
    audio: false,
  });
  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {id, checked} = e.target;
    setCategories(prev => ({...prev, [id]: checked}));
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <Checkbox id="pinned" checked={categories.pinned} onChange={handleCategoryChange}>
        Pinned
      </Checkbox>
      <Checkbox id="recentlyUsed" onChange={handleCategoryChange} checked={categories.recentlyUsed}>
        Recently Used
      </Checkbox>
      <Checkbox id="all" checked={categories.all} onChange={handleCategoryChange}>
        All
      </Checkbox>
      <Checkbox id="image" checked={categories.image} onChange={handleCategoryChange}>
        Image Generation
      </Checkbox>
      <Checkbox id="text" checked={categories.text} onChange={handleCategoryChange}>
        Text Generation
      </Checkbox>
      <Checkbox id="audio" checked={categories.audio} onChange={handleCategoryChange}>
        Audio Generation
      </Checkbox>
    </div>
  );
}
