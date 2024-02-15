import React from 'react';

export default function Ribbon({ title, backgroundColor, classes, textColor }) {
    return (
        <div
            className={`w-auto py-0.5 px-4 bg-${backgroundColor} absolute top-10 left-0 ${classes}`}
        >
            <label className={`text-${textColor} text-sm capitalize`}>
                {title}
            </label>
        </div>
    );
}
