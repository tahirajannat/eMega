import React, { useState } from 'react';

export default function Hero() {
    const list = [
        { id: 1, name: 'Item 1', list_id: true },
        { id: 2, name: 'Item 2', list_id: false },
        { id: 3, name: 'Item 3', list_id: true },
        // ... add more items as needed
    ];

    const [clickedItemId, setClickedItemId] = useState(null);

    const handleClick = (itemId) => {
        setClickedItemId(itemId);
    };

    return (
        <div>
            {list.map((item) => (
                <div
                    key={item.id}
                    className={
                        clickedItemId === item.id ? 'bg-red-400' : 'bg-white'
                    }
                    onClick={() => handleClick(item.id)}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
}
